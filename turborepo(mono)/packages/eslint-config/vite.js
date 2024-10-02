/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended", // 기본 ESLint 권장 규칙
    "plugin:react/recommended", // React 관련 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 관련 규칙
  ],
  parser: "@typescript-eslint/parser", // TypeScript 지원을 위한 파서 설정
  plugins: ["react", "@typescript-eslint"], // 필요한 플러그인들
  settings: {
    react: {
      version: "detect", // React 버전 자동 탐지
    },
  },
  rules: {
    // 프로젝트 전반에 적용할 추가적인 규칙들
    "react/prop-types": "off", // prop-types 규칙 비활성화
    "@typescript-eslint/no-unused-vars": "warn", // 미사용 변수 경고
  },
};
