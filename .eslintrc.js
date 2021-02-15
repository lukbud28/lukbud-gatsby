module.exports = {
  extends: [`airbnb`, `airbnb/hooks`, `prettier`],
  globals: {
    __PATH_PREFIX__: true,
    document: true,
    window: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"],
      },
    ],
    "react/prop-types": 2,
    semicolon: 0,
    quotes: 0,
    "linebreak-style": 0,
    "import/no-unresolved": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"],
      },
    },
  },
}
