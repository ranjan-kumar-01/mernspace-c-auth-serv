import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "public/**",
      "!.github/",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
    ],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    rules: {
      // "no-console": "warn",
      "no-debugger": "error",
      "dot-notation": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "prefer-const": "error",
      eqeqeq: ["error", "always"],
    },
  },
]);
