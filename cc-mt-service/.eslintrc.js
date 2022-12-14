module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": "off",
    "no-dupe-else-if": ["error"],
    "eqeqeq": ["error", "always"],
    "no-implicit-globals": "error",
    "no-redeclare": "error",
    "no-promise-executor-return": "error",
    "no-undef": "off",
    "no-unused-vars": "off",
    "camelcase": "error",
    "arrow-spacing": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "no-unreachable": "error",
    "complexity": ["warn", 10],
    "no-invalid-this": "warn",
    "no-multi-spaces": "warn",
    "no-self-assign": "warn",
    "require-await": "warn",
    "no-shadow": "warn",
    "comma-spacing": "warn",
    "max-lines-per-function": "warn",
    "prefer-object-spread": "warn",
    "prefer-template": "warn"
  }
}
