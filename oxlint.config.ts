import { defineConfig } from "oxlint";

import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, next, react],
  rules: {
    complexity: "off",
    "func-style": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "max-classes-per-file": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "promise/prefer-await-to-then": "off",
    "sort-keys": "off",
  },
});
