module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:node/recommended-module",
    ],
    rules: {
        "node/callback-return": "error",
    }
};

