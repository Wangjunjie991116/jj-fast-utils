export declare let parser: string;
export declare namespace parserOptions {
    let project: string[];
}
export declare let plugins: string[];
declare let _extends: string[];
export { _extends as extends };
export declare namespace env {
    let browser: boolean;
    let node: boolean;
    let es6: boolean;
    let jest: boolean;
}
export declare let rules: {
    camelcase: string;
    'no-console': string;
    'prefer-promise-reject-errors': string;
    'linebreak-style': string;
    'consistent-return': string;
    'no-restricted-syntax': string;
    'arrow-body-style': string;
    'object-curly-newline': string;
    'function-paren-newline': string;
    'no-plusplus': string;
    'no-unused-expressions': string;
    'no-shadow': string;
    'no-nested-ternary': string;
    'no-underscore-dangle': string;
    'no-param-reassign': string;
    'no-bitwise': string;
    'no-cond-assign': string;
    'no-else-return': (string | {
        allowElseIf: boolean;
    })[];
    'no-restricted-globals': (number | {
        name: string;
        message: string;
    })[];
    /** jsx-eslint/eslint-plugin-react, https://github.com/jsx-eslint/eslint-plugin-react */
    'react/forbid-prop-types': string;
    'react/jsx-no-bind': string;
    'react/prop-types': string;
    'react/jsx-one-expression-per-line': (string | {
        allow: string;
    })[];
    'react/no-multi-comp': string;
    'react/jsx-props-no-spreading': string;
    'react/state-in-constructor': string;
    'react/destructuring-assignment': string;
    'react/jsx-filename-extension': (string | {
        extensions: string[];
    })[];
    'react/jsx-indent': (string | number)[];
    'react/jsx-indent-props': (string | number)[];
    'react/static-property-placement': string[];
    'react/no-danger': string;
    'react/jsx-no-target-blank': string;
    'react/jsx-no-script-url': string;
    'react/jsx-key': string;
    'react/jsx-wrap-multilines': (string | {
        declaration: string;
        assignment: string;
        return: string;
        arrow: string;
        condition: string;
        logical: string;
        prop: string;
    })[];
    'react/require-default-props': string;
    'react/react-in-jsx-scope': string;
    'react/jsx-no-useless-fragment': string;
    'react/no-unstable-nested-components': string;
    'react/function-component-definition': (string | {
        namedComponents: string[];
    })[];
    'react/jsx-no-constructed-context-values': string;
    /** eslint-plugin-jsx-a11y, https://github.com/evcohen/eslint-plugin-jsx-a11y */
    'jsx-a11y/no-static-element-interactions': string;
    'jsx-a11y/no-noninteractive-element-interactions': string;
    'jsx-a11y/click-events-have-key-events': string;
    'jsx-a11y/anchor-is-valid': string;
    'jsx-a11y/label-has-for': string;
    'jsx-a11y/label-has-associated-control': string;
    /** eslint-plugin-react-hooks, https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks */
    'react-hooks/rules-of-hooks': string;
    'react-hooks/exhaustive-deps': string;
    /** eslint-plugin-import, https://github.com/import-js/eslint-plugin-import */
    'import/prefer-default-export': string;
    'import/no-extraneous-dependencies': string;
    'import/extensions': string;
    'import/no-unresolved': string;
    'import/no-cycle': string;
    /** eslint-plugin-simple-import-sort, https://github.com/lydell/eslint-plugin-simple-import-sort */
    'simple-import-sort/exports': string;
    'simple-import-sort/imports': (string | {
        groups: string[][];
    })[];
    /** import-js */
    'import/order': string;
    'import/no-useless-path-segments': (string | {
        noUselessIndex: boolean;
    })[];
    /** prettier 规范 */
    'comma-dangle': (string | {
        arrays: string;
        objects: string;
        imports: string;
        exports: string;
        functions: string;
    })[];
    /** ts 配置 */
    '@typescript-eslint/no-empty-interface': string;
    '@typescript-eslint/no-empty-function': string;
    '@typescript-eslint/no-shadow': string;
    '@typescript-eslint/camelcase': string[];
    '@typescript-eslint/explicit-function-return-type': string[];
    '@typescript-eslint/no-explicit-any': string[];
    '@typescript-eslint/no-unsafe-return': string;
    '@typescript-eslint/no-unsafe-assignment': string;
    '@typescript-eslint/explicit-module-boundary-types': string;
    '@typescript-eslint/no-unsafe-member-access': string;
    '@typescript-eslint/no-unsafe-call': string;
    '@typescript-eslint/no-floating-promises': string;
    '@typescript-eslint/restrict-template-expressions': string;
    '@typescript-eslint/ban-types': string;
    '@typescript-eslint/no-unsafe-argument': string;
    '@typescript-eslint/no-unused-vars': (string | {
        ignoreRestSiblings: boolean;
    })[];
    '@typescript-eslint/no-misused-promises': (string | {
        checksVoidReturn: boolean;
    })[];
    '@typescript-eslint/no-use-before-define': string[];
    '@typescript-eslint/consistent-indexed-object-style': string;
    '@typescript-eslint/consistent-type-imports': string;
    '@typescript-eslint/no-non-null-assertion': string;
    /** eslint 规则类冲突 & 关闭规则 */
    'no-use-before-define': string[];
    'no-control-regex': string[];
};
