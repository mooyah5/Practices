// 최신 ESLint 버전에서 제공하는 새로운 설정 방식을 테스트하거나 적용하는 목적으로 추가되었을 수 있다.
import js from "@eslint/js"; // 기존 자바스크립트 규칙을 가져옴
import globals from "globals"; // 글로벌 객체 정의 (window. document. 등)
import reactHooks from "eslint-plugin-react-hooks"; // 리액트 훅 규칙을 가져옴
import reactRefresh from "eslint-plugin-react-refresh"; // 리액트 리프레시 규칙을 가져옴
import tseslint from "typescript-eslint"; // 타입스크립트 규칙을 가져옴

export default tseslint.config(
  { ignores: ["dist"] }, // dist 폴더는 검사에서 제외 (무시)
  {
    extends: [
      // extends: 다른 eslint 설정을 확장해 기본 규칙 가져오기
      js.configs.recommended, // eslint의 기본 js 규칙 가져옴
      ...tseslint.configs.recommended, // ts eslint에서 제공하는 기본 규칙 가져옴
    ],
    files: ["**/*.{ts,tsx}"], // .ts, .tsx만 대상으로 eslint 검사를 적용한다.
    languageOptions: {
      // 언어 옵션 설정
      ecmaVersion: 2020, // 사용할 ECMAScript 버전
      globals: globals.browser, // 브라우저 글로벌 객체 사용 (eslint가 window. document 등의 브라우저 환경 전역 객체를 인식하게 함)
    },
    plugins: {
      // 사용할 플러그인 목록
      "react-hooks": reactHooks, // 리액트 훅 플러그인 (useEffect, useState 등의 규칙을 적용)
      "react-refresh": reactRefresh, // 컴포넌트가 올바르게 업데이트 되고 있는지 검사 )react fasst refresh 사용 시)
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // 리액트 훅 규칙을 강제하는 룰, 잘못된 위치에서의 사용을 방지
      "react-refresh/only-export-components": [
        // 리액트 리프레시 규칙 중 컴포넌트만 모듈로 export 되도록 설정 (따르지 않으면 fast refresh가 제대로 동작하지 않음)
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
