import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["dist"], // 빌드 폴더 무시
    files: ["**/*.{ts,tsx}"], // TypeScript 파일에만 적용
    languageOptions: {
      ecmaVersion: 2020, // 최신 ECMAScript 문법 지원
      globals: globals.browser, // 브라우저 환경의 글로벌 객체 추가
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.lint.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    extends: [
      js.configs.recommended, // 기본 ESLint 규칙
      ...tseslint.configs.recommended, // TypeScript 추천 규칙
    ],
    parserOptions: {
      ecmaVersion: 2020,
      project: "./tsconfig.lint.json", // TypeScript 설정 파일
      tsconfigRootDir: __dirname,
    },
    globals: {
      ...require("globals").browser, // 브라우저 환경 글로벌 객체 사용
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React Hooks 관련 규칙
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];

// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   root: true,
//   extends: ["@repo/eslint-config/next.js"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
// };
