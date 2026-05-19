import type { SchemaDefinition } from "@stratasync/core";

export interface SyncAnimation {
  id: string;
  direction: "left" | "right";
}

export interface SeedRow {
  modelName: string;
  data: Record<string, unknown>;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  updatedAt?: number;
}

export const taskListSchema: SchemaDefinition = {
  models: {
    Todo: {
      fields: {
        completed: {},
        createdAt: {},
        id: {},
        title: {},
        updatedAt: {},
      },
      loadStrategy: "instant",
    },
  },
};

export const taskListSeedRows: SeedRow[] = [
  {
    data: {
      completed: true,
      createdAt: 1,
      id: "seed-1",
      title: "Design new dashboard layout",
      updatedAt: 1,
    },
    modelName: "Todo",
  },
  {
    data: {
      completed: false,
      createdAt: 2,
      id: "seed-2",
      title: "Review pull request #42",
      updatedAt: 2,
    },
    modelName: "Todo",
  },
  {
    data: {
      completed: false,
      createdAt: 3,
      id: "seed-3",
      title: "Update API documentation",
      updatedAt: 3,
    },
    modelName: "Todo",
  },
];
