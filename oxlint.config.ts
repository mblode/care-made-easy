import { defineConfig } from "oxlint";

import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, next, react],
  rules: {
    complexity: "off",
    "class-methods-use-this": "off",
    "func-style": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/prefer-tag-over-role": "off",
    "max-classes-per-file": "off",
    "no-param-reassign": "off",
    "no-await-in-loop": "off",
    "no-empty-function": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "promise/prefer-await-to-then": "off",
    "promise/avoid-new": "off",
    "promise/prefer-await-to-callbacks": "off",
    "react/iframe-missing-sandbox": "off",
    "react/no-danger": "off",
    "react/react-compiler": "off",
    "require-unicode-regexp": "off",
    "sort-keys": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/prefer-number-coercion": "off",
  },
});
