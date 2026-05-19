// oxlint-disable eslint(no-empty-function) -- fire-and-forget cleanup in effect teardown
"use client";

import { createSyncClient } from "@stratasync/client";
import type { SyncClient } from "@stratasync/client";
import type { SchemaDefinition } from "@stratasync/core";
import { createMobXReactivity } from "@stratasync/mobx";
import { useCallback, useEffect, useRef, useState } from "react";

import { DemoServer, DemoTransport } from "./demo-transport";
import { InMemoryStorage } from "./in-memory-storage";
import type { SeedRow, SyncAnimation } from "./types";

interface DemoInfra {
  clientA: SyncClient;
  clientB: SyncClient;
  server: DemoServer;
  transportA: DemoTransport;
  transportB: DemoTransport;
}

export interface DemoClients {
  clientA: SyncClient;
  clientB: SyncClient;
  transportA: DemoTransport;
  transportB: DemoTransport;
  activeSyncAnimations: SyncAnimation[];
}

export const useDemoClients = (
  schema: SchemaDefinition,
  seedRows: SeedRow[],
  latencyMs?: number,
): DemoClients | null => {
  const [infra, setInfra] = useState<DemoInfra | null>(null);
  const [activeSyncAnimations, setActiveSyncAnimations] = useState<SyncAnimation[]>([]);
  const animationCounter = useRef(0);
  const timers = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  const scheduleTimeout = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      timers.current.delete(id);
      fn();
    }, ms);
    timers.current.add(id);
  }, []);

  useEffect(() => {
    const server = new DemoServer(seedRows);
    const transportA = new DemoTransport(server, "A", latencyMs);
    const transportB = new DemoTransport(server, "B", latencyMs);
    const reactivity = createMobXReactivity();

    const clientA = createSyncClient({
      dbName: "demo-a",
      optimistic: true,
      reactivity,
      schema,
      storage: new InMemoryStorage(),
      transport: transportA,
    });

    const clientB = createSyncClient({
      dbName: "demo-b",
      optimistic: true,
      reactivity,
      schema,
      storage: new InMemoryStorage(),
      transport: transportB,
    });

    setInfra({ clientA, clientB, server, transportA, transportB });

    return () => {
      clientA.stop().catch(() => {});
      clientB.stop().catch(() => {});
      transportA.close().catch(() => {});
      transportB.close().catch(() => {});
    };
  }, [schema, seedRows, latencyMs]);

  useEffect(() => {
    if (!infra) {
      return;
    }

    infra.server.onSyncFlow = (direction) => {
      animationCounter.current += 1;
      const animId = `sync-${animationCounter.current}`;
      setActiveSyncAnimations((prev) => [...prev, { direction, id: animId }]);
      scheduleTimeout(() => {
        setActiveSyncAnimations((prev) => prev.filter((a) => a.id !== animId));
      }, 600);
    };

    const currentTimers = timers.current;
    return () => {
      infra.server.onSyncFlow = null;
      for (const t of currentTimers) {
        clearTimeout(t);
      }
      currentTimers.clear();
    };
  }, [infra, scheduleTimeout]);

  if (!infra) {
    return null;
  }

  return { ...infra, activeSyncAnimations };
};
