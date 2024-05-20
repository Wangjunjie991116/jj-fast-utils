module.exports = {
	/**
	 * 缩进的空格数量
	 * @default 2
	 * @type {number}
	 */
	tabWidth: 4,
	/**
	 * 是否在代码块结尾加上分号
	 * @default true
	 * @type {boolean}
	 */
	semi: true,
	/**
	 * 是否使用制表符代替空格
	 * @default false
	 * @type {boolean}
	 */
	useTabs: true,
	/**
	 * 换行宽度，当代码宽度达到多少时换行
	 * @default 80
	 * @type {number}
	 */
	printWidth: 120,
	/**
	 * 是否使用单引号替代双引号
	 * @default false
	 * @type {boolean}
	 */
	singleQuote: true,
	/**
	 * 如何换行
	 */
	proseWrap: 'always',
	/**
	 * 当箭头函数只有一个参数是否加括号
	 * @default "always"
	 * @type {"always"|"avoid"}
	 */
	arrowParens: 'avoid',
	/**
	 * 末尾是否加上逗号
	 * @default "es5"
	 * @type {"es5"|"none"|"all"}
	 */
	trailingComma: 'es5',
	/**
	 * 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	 * @default true
	 * @type {boolean}
	 */
	bracketSpacing: true,
	/**
	 * 格式化标签 > 会单独成一行
	 * @default true
	 * @type {boolean}
	 */
	jsxBracketSameLine: false,
};
