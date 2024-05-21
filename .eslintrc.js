module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['simple-import-sort', 'regexp', '@typescript-eslint'],
	extends: [
		'airbnb',
		'airbnb/hooks',
		'prettier',
		'eslint:recommended',
		'plugin:regexp/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: { project: ['./tsconfig.json'] },
	env: { browser: true, node: true, es6: true, jest: true },
	rules: {
		camelcase: 'off', // 允许定义属性不是驼峰写法
		'no-console': 'off', // 允许使用console方法
		'prefer-promise-reject-errors': 'off', // 允许promise的reject方法里的对象不用Error包裹，直接返回 resolve('错误')
		'linebreak-style': 'off', // 允许不同操作系统的换行符
		'consistent-return': 'off', // 允许函数没有明确的返回值
		'no-restricted-syntax': 'off', // 受限制的js语法，比如优先用Object.keys循环而不是for...in
		'arrow-body-style': 'off', // 允许箭头函数
		'object-curly-newline': 'off', // 允许对象括号定义不需要另起一行
		'function-paren-newline': 'off', // 同上，针对函数
		'no-plusplus': 'off', // 允许使用一元操作符 ++ 和 --
		'no-unused-expressions': 'off', // 允许未使用过的表达式
		'no-shadow': 'off', // 允许变量声明覆盖外层作用域的变量，考虑到 actions 在 connect 之后内部外 import 同名的习惯关闭该规则
		'no-nested-ternary': 'warn', // 嵌套式三木运算
		'no-underscore-dangle': 'warn', // 标识符下划线
		'no-param-reassign': 'error', // 禁止对函数中的参数重新赋值
		'no-bitwise': 'error', // 禁止使用按位运算符
		'no-cond-assign': 'error', // 禁止赋值运算在条件判断中
		'no-else-return': ['error', { allowElseIf: false }], // 存在return则不需要else，且多个条件使用多个if，不使用 else if
		'no-restricted-globals': [
			// 禁止全局变量
			2,
			{ name: 'event', message: 'Use local parameter instead.' },
		],
		// yannickcr
		'react/forbid-prop-types': 'off', // React propTypes 的类型允许出现 any, array, object
		'react/jsx-no-bind': 'off', // 允许使用bind函数
		'react/prop-types': 'off', // 允许不配置 propTypes
		'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }], // 允许一行有一个单独表达式
		'react/no-multi-comp': 'off', // 允许一个文件中定义多个组件
		'react/jsx-props-no-spreading': 'off', // 允许定义扩展属性，如...props
		'react/state-in-constructor': 'off', // 允许不在构造函数中定义状态
		'react/destructuring-assignment': 'warn', // 组件中必须使用结构
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], // 禁止jsx类型不为jsx tsx后缀
		'react/jsx-indent': ['error', 4], // 禁止jsx缩进4个空格
		'react/jsx-indent-props': ['error', 4], // 同上，针对jsx属性
		'react/static-property-placement': ['error', 'static public field'], // 禁止静态属性和方法需没定义在类顶部
		'react/no-danger': 'error', // 禁止使用dangerouslySetInnerHTML
		'react/jsx-no-target-blank': 'error', //禁止使用target="_blank"
		'react/jsx-no-script-url': 'error', // 禁止js脚本链接位javascript: 或 javascript:void(0)
		'react/jsx-key': 'error', // map 元素需要填 key
		'react/jsx-wrap-multilines': [
			// react jsx 写法控制，是否重起一行
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'ignore',
			},
		],
		// jsx-eslint
		'react/require-default-props': 'off', // 允许不使用 propTypes
		'react/react-in-jsx-scope': 'off', // 允许jsx、tsx顶部不声明 > import React from 'react'
		'react/jsx-no-useless-fragment': 'off', // 允许使用空标签
		'react/no-unstable-nested-components': 'warn', // 使用不稳定的元素嵌套影响性能（保持warn报警）
		'react/function-component-definition': [
			// 禁止除这几种方式外定义组件函数
			'error',
			{
				namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
			},
		],
		'react/jsx-no-constructed-context-values': 'error', // 禁止使用context的value传递没使用useMemo包裹
		// evcohen
		'jsx-a11y/no-static-element-interactions': 'off', // 允许静态元素上绑定交互事件
		'jsx-a11y/no-noninteractive-element-interactions': 'off', // 允许非交互元素绑定事件（div、span）
		'jsx-a11y/click-events-have-key-events': 'off', // 允许绑定点击事件同时不存在需要键盘事件
		'jsx-a11y/anchor-is-valid': 'off', // 允许保证A标签无效
		'jsx-a11y/label-has-for': 'off', // 允许表单元素没有对应label
		'jsx-a11y/label-has-associated-control': 'off', // 同上
		// hooks
		'react-hooks/rules-of-hooks': 'error', // 禁止函数组件不在顶层作用域使用hook
		'react-hooks/exhaustive-deps': 'error', // 禁止使用uesEffect的依赖变动项没写全
		/** 涉及模块导出/导入语法 & 引入顺序 */
		// benmosher
		'import/prefer-default-export': 'off', // 允许命名导出，比如 exrpot { test: testModule }
		'import/no-extraneous-dependencies': 'off', // 允许导入dependencies开发模块
		'import/extensions': 'off', // 允许导入模块允许不带后缀名
		'import/no-unresolved': 'off', // 允许导入模块不存在
		'import/no-cycle': 'off', // 允许没有解析的依赖关系
		// lydell
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			// 自动排序
			'error',
			{ groups: [['^react', '^@?\\w'], ['^'], ['^\\.'], ['^\\u0000']] },
		],
		// import-js
		'import/order': 'off', // 允许导入模块不排序
		'import/no-useless-path-segments': ['error', { noUselessIndex: true }], // 是否包含不必要的路径
		// prettier 规范
		'comma-dangle': [
			// https://prettier.io/docs/en/options.html#trailing-commas
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		// ts 配置
		'@typescript-eslint/no-empty-interface': 'off', // 允许定义空类型
		'@typescript-eslint/no-empty-function': 'off', // 允许定义空函数
		'@typescript-eslint/no-shadow': 'off', // 允许函数内参数命名同外层作用域有相同定义
		'@typescript-eslint/camelcase': ['off'], // 允许变量定义不使用驼峰
		'@typescript-eslint/explicit-function-return-type': ['off'], // 允许函数没有明确的返回类型
		'@typescript-eslint/no-explicit-any': ['off'], // 允许使用any类型
		'@typescript-eslint/no-unsafe-return': 'off', // 允许函数返回类型为any
		'@typescript-eslint/no-unsafe-assignment': 'off', // 允许将任意值赋给未知类型的变量
		'@typescript-eslint/explicit-module-boundary-types': 'off', // 允许没有显示地返回类型
		'@typescript-eslint/no-unsafe-member-access': 'off', // 允许访问未知定义对象类型的属性或方法
		'@typescript-eslint/no-unsafe-call': 'off', // 允许调用any类型的函数和方法
		'@typescript-eslint/no-floating-promises': 'off', // 允许promise简写，如Promise.reject().catch()，catch中可不写回调
		'@typescript-eslint/restrict-template-expressions': 'off', // 允许模版字符串有对象
		'@typescript-eslint/ban-types': 'warn', // 报警内置类型别名
		'@typescript-eslint/no-unsafe-argument': 'warn', // 函数内不安全类型的参数（any）传递报警
		'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }], // 禁止声明没有被使用到的变量
		'@typescript-eslint/no-misused-promises': [
			// 禁止错误地使用promise
			'error',
			{ checksVoidReturn: false },
		],
		'@typescript-eslint/no-use-before-define': ['error'], // 禁止变量提升，必需提前定义
		'@typescript-eslint/consistent-indexed-object-style': 'error', // 对象索引严格使用点号 || 方括号方法
		'@typescript-eslint/consistent-type-imports': 'error', // 禁止导入类型风格不一致，比如一个使用import，一个使用import type
		'@typescript-eslint/no-non-null-assertion': 'error', // 禁止使用非空！运算符来判断null & undefined
		/**
		 * eslint规则类冲突 & 关闭规则
		 */
		'no-use-before-define': ['off'],
		'no-control-regex': ['off'],
	},
};
