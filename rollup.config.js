// 别名插件
import alias from '@rollup/plugin-alias';
// CommonJS 识别插件. rollup 编译源码中默认是 esm, 所以 rollup 无法识别 CommonJS 模块。比如某个依赖包里用到了 cjs 标准的导入语句，这个插件将他们转为 esm 的导入语句
import commonjs from '@rollup/plugin-commonjs';
// 导入 json 中的数据插件
import json from '@rollup/plugin-json';
// 支持模块名称导入插件
import resolve from '@rollup/plugin-node-resolve';
// 代码压缩插件
import terser from '@rollup/plugin-terser';
// 转译 typescript 插件
import typescript from '@rollup/plugin-typescript';
// 导出 defineConfig 方法可以让编辑器（VSCode）智能提示所有的 rollup 的配置项
import { defineConfig } from 'rollup';

// 引入 package.json
import pkg from './package.json' assert { type: 'json' };

// 通用 output 配置
const commonAttr = {
	name: `${pkg.name}${pkg.version}`,
	sourcemap: true,
	globals: { qs: 'qs' },
};
export default defineConfig({
	input: 'src/index.ts',
	output: [
		// umd 适用于 node 和 browser 等场景. 该格式下, name 属性是必须的, 这可以在 script 标签引入后 window 下会挂载该属性的变量来使用类库方法
		{
			file: 'dist/index.umd.js',
			format: 'umd',
			...commonAttr,
		},
		// iife 会将代码封装起来，以便可以通过浏览器中的 script 标签使用，同时避免与其他代码产生不必要的交互
		{
			file: 'dist/index.min.js',
			format: 'iife',
			...commonAttr,
			plugins: [terser()],
		},
	],
	plugins: [resolve(), commonjs(), typescript(), json(), alias({ resolve: ['.js'] })],
	external: ['qs'], // 不需要打入包内的第三方npm包,例如['lodash']
});
