module.exports = {
  env: {
    browser: true,
    es2017: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "standard",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
