"use client";

import { SyncProvider } from "@stratasync/react";

import { SyncFlow } from "./sync-flow";
import { TaskListPanel } from "./task-list-panel";
import { taskListSchema, taskListSeedRows } from "./types";
import { useDemoClients } from "./use-simulated-sync";

export function SyncDemo() {
  const demoClients = useDemoClients(taskListSchema, taskListSeedRows, 300);

  if (!demoClients) {
    return (
      <div className="grid gap-[var(--slide-space-5)] md:grid-cols-[1fr_48px_1fr]">
        <div className="h-[250px] animate-pulse rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] bg-[color-mix(in_oklab,var(--fg)_4%,var(--bg))]" />
        <div />
        <div className="h-[250px] animate-pulse rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] bg-[color-mix(in_oklab,var(--fg)_4%,var(--bg))]" />
      </div>
    );
  }

  const { clientA, clientB, transportA, transportB, activeSyncAnimations } = demoClients;

  return (
    <div className="honk-fade-up grid grid-cols-1 items-center gap-[var(--slide-space-4)] md:grid-cols-[1fr_48px_1fr]">
      <SyncProvider autoStop={false} client={clientA}>
        <TaskListPanel label="Device A" transport={transportA} />
      </SyncProvider>

      <SyncFlow animations={activeSyncAnimations} />

      <SyncProvider autoStop={false} client={clientB}>
        <TaskListPanel label="Device B" transport={transportB} />
      </SyncProvider>
    </div>
  );
}
