"use client";

import { usePendingCount, useQuery, useSyncClient } from "@stratasync/react";
import { CircleCheckIcon, CrossSmallIcon, WifiFullIcon, WifiNoSignalIcon } from "blode-icons-react";
import type { KeyboardEvent } from "react";
import { useId, useRef, useState } from "react";

import type { DemoTransport } from "./demo-transport";
import type { Todo } from "./types";

let nextId = 0;
const uid = () => {
  nextId += 1;
  return `item-${nextId}-${Date.now()}`;
};

const TodoRow = ({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}: {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: (title: string) => void;
}) => {
  const [draft, setDraft] = useState(todo.title);
  const isFocused = useRef(false);

  if (!isFocused.current && draft !== todo.title) {
    setDraft(todo.title);
  }

  return (
    <li className="group flex items-center gap-[var(--slide-space-2)] border-b border-[var(--hairline)] px-[var(--slide-space-3)] py-[var(--slide-space-2)] last:border-b-0">
      <button
        aria-label={`Mark "${todo.title}" as ${todo.completed ? "incomplete" : "complete"}`}
        className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
        onClick={onToggle}
        type="button"
      >
        {todo.completed ? (
          <CircleCheckIcon className="text-[#22c55e]" size={20} />
        ) : (
          <span className="block size-[18px] rounded-full border-2 border-[var(--hairline)]" />
        )}
      </button>

      <input
        aria-label={`Edit "${todo.title}"`}
        className="flex-1 truncate border-0 bg-transparent p-0 outline-none transition-[color,opacity] slide-text-sm"
        onBlur={(e) => {
          isFocused.current = false;
          onUpdate(e.target.value);
        }}
        onChange={(e) => setDraft(e.target.value)}
        onFocus={() => {
          isFocused.current = true;
        }}
        placeholder="New To-Do"
        style={
          todo.completed
            ? { color: "var(--fg-soft)", textDecoration: "line-through", opacity: 0.5 }
            : undefined
        }
        value={draft}
      />

      <button
        aria-label={`Delete "${todo.title}"`}
        className="shrink-0 cursor-pointer text-[var(--fg-soft)] opacity-100 transition-opacity hover:text-red-500 md:opacity-0 md:group-hover:opacity-100"
        onClick={onDelete}
        type="button"
      >
        <CrossSmallIcon aria-hidden="true" className="size-3.5" />
      </button>
    </li>
  );
};

export const TaskListPanel = ({
  label,
  transport,
}: {
  label: string;
  transport: DemoTransport;
}) => {
  const { client, state } = useSyncClient();
  const { count: pendingCount, hasPending } = usePendingCount();
  const { data: todos } = useQuery<Todo>("Todo", {
    orderBy: (a, b) => a.createdAt - b.createdAt,
  });

  const [inputValue, setInputValue] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const inputId = useId();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const now = Date.now();
      client.create("Todo", {
        completed: false,
        createdAt: now,
        id: uid(),
        title: inputValue.trim(),
        updatedAt: now,
      });
      setInputValue("");
    }
  };

  const handleToggle = (todo: Todo) => {
    client.update("Todo", todo.id, {
      completed: !todo.completed,
      updatedAt: Date.now(),
    });
  };

  const handleUpdate = (todo: Todo, title: string) => {
    client.update("Todo", todo.id, { title, updatedAt: Date.now() });
  };

  const handleDelete = (todo: Todo) => {
    // oxlint-disable-next-line eslint(no-empty-function) -- fire-and-forget delete
    client.delete("Todo", todo.id).catch(() => {});
  };

  const handleToggleNetwork = () => {
    const next = !isOnline;
    setIsOnline(next);
    transport.setOnline(next);
  };

  const isSynced = isOnline && state === "syncing";
  const offlineLabel = isOnline ? "Connecting" : "Offline";
  const statusLabel = isSynced ? "Synced" : offlineLabel;

  return (
    <section
      aria-label={label}
      className="flex flex-col overflow-hidden rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] bg-[color-mix(in_oklab,var(--fg)_6%,var(--bg))]"
    >
      <div className="flex items-center justify-between border-b border-[var(--hairline)] px-[var(--slide-space-3)] py-[var(--slide-space-2)]">
        <div className="flex items-center gap-[var(--slide-space-2)]">
          <span className="font-heading slide-text-sm">{label}</span>
          <span
            className="flex items-center gap-[var(--slide-space-1)] slide-text-xs"
            style={{ color: isSynced ? "#22c55e" : "var(--fg-soft)" }}
          >
            <span className="block size-1.5 rounded-full bg-current" />
            {statusLabel}
          </span>
        </div>
        <div className="flex items-center gap-[var(--slide-space-1)]">
          {hasPending && (
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-100 px-1.5 font-medium text-amber-700 text-xs">
              {pendingCount}
            </span>
          )}
          <button
            aria-label={isOnline ? "Go offline" : "Go online"}
            className="flex size-7 cursor-pointer items-center justify-center rounded-[var(--slide-radius-sm)] text-[var(--fg-soft)] transition-colors hover:bg-[color-mix(in_oklab,var(--fg)_8%,transparent)]"
            onClick={handleToggleNetwork}
            type="button"
          >
            {isOnline ? (
              <WifiFullIcon aria-hidden="true" className="size-3.5" />
            ) : (
              <WifiNoSignalIcon aria-hidden="true" className="size-3.5 text-red-500" />
            )}
          </button>
        </div>
      </div>

      <ul className="max-h-[250px] overflow-auto">
        {todos.map((todo) => (
          <TodoRow
            key={todo.id}
            onDelete={() => handleDelete(todo)}
            onToggle={() => handleToggle(todo)}
            onUpdate={(title) => handleUpdate(todo, title)}
            todo={todo}
          />
        ))}
      </ul>

      <div className="border-t border-[var(--hairline)]">
        <label className="sr-only" htmlFor={inputId}>
          Add a new item
        </label>
        <input
          className="w-full bg-transparent px-[var(--slide-space-3)] py-[var(--slide-space-2)] text-[var(--fg)] placeholder:text-[var(--fg-soft)] slide-text-sm focus:outline-none"
          id={inputId}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          type="text"
          value={inputValue}
        />
      </div>
    </section>
  );
};
