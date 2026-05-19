"use client";

import type { CSSProperties } from "react";
import { useId, useState } from "react";
import { CircleCheckIcon, WifiFullIcon } from "blode-icons-react";
import { Reorder, useDragControls } from "motion/react";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const INITIAL_ITEMS: TodoItem[] = [
  { id: "1", text: "Design new dashboard layout", completed: true },
  { id: "2", text: "Review pull request #42", completed: false },
  { id: "3", text: "Update API documentation", completed: false },
];

function DragHandle({ controls }: { controls: ReturnType<typeof useDragControls> }) {
  return (
    <button
      aria-label="Reorder item"
      className="cursor-grab touch-none text-[var(--fg-soft)] opacity-0 transition-opacity group-hover:opacity-100 active:cursor-grabbing"
      onPointerDown={(e) => controls.start(e)}
      type="button"
    >
      <svg aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16">
        <circle cx="5" cy="3" r="1.5" />
        <circle cx="11" cy="3" r="1.5" />
        <circle cx="5" cy="8" r="1.5" />
        <circle cx="11" cy="8" r="1.5" />
        <circle cx="5" cy="13" r="1.5" />
        <circle cx="11" cy="13" r="1.5" />
      </svg>
    </button>
  );
}

function TodoRow({ item, onToggle }: { item: TodoItem; onToggle: (id: string) => void }) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      as="li"
      className="group flex items-center gap-[var(--slide-space-3)] border-b border-[var(--hairline)] px-[var(--slide-space-4)] py-[var(--slide-space-3)] transition-colors last:border-b-0 hover:bg-[color-mix(in_oklab,var(--fg)_4%,transparent)]"
      dragControls={controls}
      dragListener={false}
      style={{ touchAction: "pan-x" }}
      value={item}
    >
      <label className="flex size-5 shrink-0 cursor-pointer items-center justify-center">
        <input
          aria-label={`Mark "${item.text}" as ${item.completed ? "incomplete" : "complete"}`}
          checked={item.completed}
          className="sr-only"
          onChange={() => onToggle(item.id)}
          type="checkbox"
        />
        {item.completed ? (
          <CircleCheckIcon className="text-[#22c55e]" size={20} />
        ) : (
          <span className="block size-[18px] rounded-full border-2 border-[var(--hairline)]" />
        )}
      </label>

      <span
        className="flex-1 slide-text-base transition-[color,text-decoration]"
        style={
          item.completed
            ? ({
                textDecoration: "line-through",
                color: "var(--fg-soft)",
              } as CSSProperties)
            : undefined
        }
      >
        {item.text}
      </span>

      <DragHandle controls={controls} />
    </Reorder.Item>
  );
}

function DevicePanel({
  items,
  label,
  onAdd,
  onReorder,
  onToggle,
}: {
  items: TodoItem[];
  label: string;
  onAdd: (text: string) => void;
  onReorder: (items: TodoItem[]) => void;
  onToggle: (id: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const inputId = useId();

  return (
    <div className="flex flex-col overflow-hidden rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] bg-[color-mix(in_oklab,var(--fg)_6%,var(--bg))]">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] px-[var(--slide-space-4)] py-[var(--slide-space-3)]">
        <div className="flex items-center gap-[var(--slide-space-2)]">
          <span className="font-heading slide-text-base">{label}</span>
          <span className="flex items-center gap-[var(--slide-space-1)] text-[#22c55e] slide-text-xs">
            <span className="block size-2 rounded-full bg-current" />
            Synced
          </span>
        </div>
        <WifiFullIcon className="text-[var(--fg-soft)]" size={16} />
      </div>

      <Reorder.Group
        as="ul"
        axis="y"
        className="flex flex-col"
        onReorder={onReorder}
        values={items}
      >
        {items.map((item) => (
          <TodoRow item={item} key={item.id} onToggle={onToggle} />
        ))}
      </Reorder.Group>

      <div className="border-t border-[var(--hairline)]">
        <label className="sr-only" htmlFor={inputId}>
          Add a new item
        </label>
        <input
          className="w-full bg-transparent px-[var(--slide-space-4)] py-[var(--slide-space-3)] text-[var(--fg-soft)] placeholder:text-[var(--fg-soft)] slide-text-base focus:outline-none"
          id={inputId}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim()) {
              onAdd(inputValue.trim());
              setInputValue("");
            }
          }}
          placeholder="What needs to be done?"
          type="text"
          value={inputValue}
        />
      </div>
    </div>
  );
}

export function SyncDemo() {
  const [items, setItems] = useState<TodoItem[]>(INITIAL_ITEMS);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    );
  };

  const addItem = (text: string) => {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), text, completed: false }]);
  };

  return (
    <div className="honk-fade-up grid gap-[var(--slide-space-5)] md:grid-cols-2">
      <DevicePanel
        items={items}
        label="Device A"
        onAdd={addItem}
        onReorder={setItems}
        onToggle={toggleItem}
      />
      <DevicePanel
        items={items}
        label="Device B"
        onAdd={addItem}
        onReorder={setItems}
        onToggle={toggleItem}
      />
    </div>
  );
}
