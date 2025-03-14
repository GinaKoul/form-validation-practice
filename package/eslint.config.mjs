import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  {
    ignores: ["**webpack.common.js","**webpack.dev.js","**webpack.prod.js","**dist"],
  },
  pluginJs.configs.recommended,
  {
    files: ["**.js"],
    rules: {
      semi: "error",
      "no-unused-vars": "error",
      "prefer-const": ["warn", { "ignoreReadBeforeAssign": true }],
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "warn",
      "no-unused-expressions": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-parens": "error",
      "no-extra-semi": "error",
      "no-func-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-obj-calls": "error",
      "no-prototype-builtins": "error",
      "no-regex-spaces": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
      "accessor-pairs": "warn",
      "array-callback-return": "warn",
      "block-scoped-var": "error",
      "class-methods-use-this": "error",
      "consistent-return": "error",
      "curly": "error",
      "default-case": "warn",
      "dot-location": "error",
      "eqeqeq": "error",
      "guard-for-in": "warn",
      "no-alert": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-div-regex": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-empty-pattern": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-fallthrough": "warn",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-proto": "error",
      "no-redeclare": "error",
      "no-return-assign": "error",
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-labels": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": "error",
      "no-with": "error",
      "prefer-promise-reject-errors": "error",
      "radix": "error",
      "require-await": "error",
      "vars-on-top": "error",
      "yoda": "error",
      "strict": "error",
      "no-catch-shadow": "error",
      "no-delete-var": "error",
      "no-label-var": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": "error",
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "camelcase": "error",
      "capitalized-comments": "error",
      "comma-spacing": ["error", { "before": false, "after": true }],
      "comma-style": ["error", "last"],
      "computed-property-spacing": ["error", "never"],
      "no-multiple-empty-lines": "error",
      "jsx-quotes": ["error", "prefer-single"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "keyword-spacing": ["error", { "before": true, "after": true }]
    }  
  },
  eslintConfigPrettier,
];