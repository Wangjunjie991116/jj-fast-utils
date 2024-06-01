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
const commonOutputCig = { name: pkg.name, sourcemap: true, globals: { qs: 'qs' } };
// 通用 plugins 配置
const commonPluginsCig = [resolve(), commonjs(), typescript(), json(), alias({ resolve: ['.js'] }), terser()];

export default defineConfig([
	{
		input: 'src/web.ts',
		output: [
			{ file: 'dist/web.js', format: 'cjs', ...commonOutputCig },
			{ file: 'dist/web.esm.js', format: 'esm', ...commonOutputCig },
			{ file: 'dist/web.umd.js', format: 'umd', ...commonOutputCig },
		],
		plugins: commonPluginsCig,
		external: ['qs'], // 不需要打入包内的第三方npm包,例如['lodash']
	},
	{
		input: 'src/node.ts',
		output: [
			{ file: 'dist/node.js', format: 'cjs', ...commonOutputCig },
			{ file: 'dist/node.esm.js', format: 'esm', ...commonOutputCig },
			{ file: 'dist/node.umd.js', format: 'umd', ...commonOutputCig },
		],
		plugins: commonPluginsCig,
		external: ['qs'], // 不需要打入包内的第三方npm包,例如['lodash']
	},
]);
