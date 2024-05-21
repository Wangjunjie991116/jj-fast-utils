// import { getBabelOutputPlugin } from '@rollup/plugin-babel';
// rollup 编译源码中默认是 esm，所以 rollup 无法识别 CommonJS 模块。比如某个依赖包里用到了 cjs 标准的导入语句，这个插件将他们转为 esm 的导入语句
import commonjs from '@rollup/plugin-commonjs';
// rollup 能导入 json 中的数据，需要这个插件
import json from '@rollup/plugin-json';

import terser from '@rollup/plugin-terser';
// 支持使用模块名称导入包

import resolve from '@rollup/plugin-node-resolve';
// rollup 转译 typescript 插件
import typescript from '@rollup/plugin-typescript';

// 引入 package.json
import pkg from './package.json' assert { type: 'json' };
import alias from '@rollup/plugin-alias';
// 导出 defineConfig 方法可以让编辑器（VSCode）智能提示所有的 rollup 的配置项
import { defineConfig } from 'rollup';

const pkgName = pkg.name;

export default defineConfig({
	input: 'src/index.ts',
	output: [
		// umd 格式适用于 node 场景
		{ file: pkg.main, format: 'cjs', exports: 'named' },
		// esm 格式适用于 browser
		{ file: pkg.module, format: 'esm', exports: 'named' },
		// umd 为通用格式, 适用于 node 和 browser 等场景. 该格式下, name 属性是必须的, 这可以在 script 标签引入后 window 下会挂载该属性的变量来使用类库方法
		{ file: pkg.browser, format: 'umd', name: pkgName },
		// iife 格式支持在 Html 文件中引入类库来直接使用
		{
			file: pkg.minHtml,
			format: 'iife',
			name: pkgName,
			extend: true,
			plugins: [terser()],
		},
	],
	plugins: [json(), resolve(), typescript(), alias({ resolve: ['.js'] }), commonjs()],
	external: [], // 不需要打入包内的第三方npm包,例如['lodash']
});
