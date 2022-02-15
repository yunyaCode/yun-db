const path = require('path');
const babel = require('rollup-plugin-babel');
// const nodeResolve = require('@rollup/plugin-node-resolve');
const uglify = require('rollup-plugin-uglify').uglify;
const merge = require('lodash.merge');
const pkg = require('./package.json');
import nodeResolve from "@rollup/plugin-node-resolve"
const extensions = ['.js', '.ts'];

console.log('pkg.main==',pkg.main)
const resolve = function (...args) {
    console.log('resolve.>>>>', ...args)
    return path.resolve(__dirname, ...args);
};

// 打包任务的个性化配置
const jobs = {
    esm: {
        output: {
            format: 'esm',
            file: resolve(pkg.module),
        },
    },
    umd: {
        output: {
            format: 'umd',
            file: resolve(pkg.main),
            name: 'rem',
        },
    },
    min: {
        output: {
            format: 'umd',
            file: resolve(pkg.main.replace(/(.\w+)$/, '.min$1')),
            name: 'rem',
        },
        plugins: [uglify()],
    },
};

// 从环境变量获取打包特征
const mergeConfig = jobs[process.env.FORMAT || 'esm'];

module.exports = merge({
        input: resolve('./src/index.ts'),
        output: {},
        plugins: [
            nodeResolve({
                extensions,
                modulesOnly: true,
            }),
            babel({
                exclude: 'node_modules/**',
                extensions,
            }),
        ],
    },
    mergeConfig,
);