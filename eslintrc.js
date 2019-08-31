module.exports = {
    extends: ['eslint:recommended'],
    plugins: [],
    rules: {
        'array-bracket-newline': [2, 'consistent'],
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': [2, 'consistent'],
        'block-spacing': [2, 'always'],
        'camelcase': [2],
        'capitalized-comments': [2, 'always'],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [0],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'that'],
        'eol-last': [2, 'always'],
        'func-call-spacing': [2, 'never'],
        'func-name-matching': [2, 'always'],
        'func-names': [2, 'never'],
        'func-style': [0],
        'function-paren-newline': [2, 'multiline'],
        'implicit-arrow-linebreak': [2, 'beside'],
        'indent': [2, 4],
        'jsx-quotes': [2, 'prefer-double'],
        'keyword-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': [2, { afterBlockComment: true }],
        'lines-between-class-members': [2, 'always'],
        'new-parens': [2, 'always'],
        'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],

        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1, maxBOF: 0 }],
        'operator-assignment': [0],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                prev: '*',
                next: ['class', 'return', 'directive', 'iife']
            },
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var',
                    'function',
                    'cjs-import',
                    'import'
                ],
                next: '*'
            }
        ],
        'quote-props': [2, 'consistent-as-needed'],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'semi-style': [2, 'last'],
        'sort-keys': [0],
        'sort-vars': [0],
        'space-before-blocks': [2, 'never'],
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2],
        'space-infix-ops': [2],
        'space-unary-ops': [2, { words: true, nonwords: false }],
        'spaced-comment': [2, 'always'],
        'switch-colon-spacing': [2, { after: true, before: false }],
        'template-tag-spacing': [2, 'never'],
        'unicode-bom': [0, 'never'],
        'wrap-regex': [0, 'never']
    }
};
