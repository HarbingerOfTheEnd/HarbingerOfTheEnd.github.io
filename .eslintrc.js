/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: ['plugin:astro/recommended', 'plugin:prettier/recommended'],
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {},
        },
    ],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
};
