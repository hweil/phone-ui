'use strict';
const components = ['button'];
const path = require('path')
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let componentPaths = [];
let entry = {};
let ROOT = path.resolve(__dirname, '../../');

entry["index"] = `./src/index.js`;

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(ROOT, './dist'),
        filename: 'common.js',
        library: 'PHONE',
        libraryTarget: 'umd'
    },
    plugins: [new ExtractTextPlugin("style.css")],
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /(node_modules)/
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre',
                options: {
                    eslint: {
                        configFile: '.eslintrc'
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        postcss: [require('postcss-bem')(), require('postcss-cssnext')()],
                        extractCSS: true
                    }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader?modules'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                ]
            }
        ]
    }
}
