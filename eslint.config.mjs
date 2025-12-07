import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import configPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/.vscode",
    "**/dist",
    "**/node_modules",
    "**/public",
    "**/package.json",
    "**/package-lock.json",
    "**/tsconfig.json",
    "**/postcss.config.mjs",
    "**/.prettierignore",
    "**/.env",
  ]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-children-prop": "off",
      "@next/next/no-async-client-component": "off",
      "no-var": "error",
      "@typescript-eslint/no-empty-object-type": "warn",
      "prefer-const": "off",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    name: "prettier/config",
    ...configPrettier,
  },
]);

export default eslintConfig;
