module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        indent: "on",
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto"
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
