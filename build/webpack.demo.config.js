'use strict';
const path = require('path')
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')

const HtmlwebpackPlugin = require('html-webpack-plugin')

let entry = {};

let ROOT = path.resolve(__dirname, "../");
var htmlplugin =
    new HtmlwebpackPlugin({
        filename: `./index.html`,
        template: `./demo/template.html`,
        chunks: ['bundle'],
        minify: {
            collapseWhitespace: true,
            minifyJS: true
        }
    });
module.exports = {
    devtool: "source-map",
    entry: {
        'bundle': path.resolve(ROOT, './demo/index.js')
    },
    output: {
        path: path.resolve(ROOT, './demo'),
        filename: './dist/[name].js'
    },
    plugins: [htmlplugin],
    devServer: {
        port: 10000,
        host: '127.0.0.1',
        https: false,
        compress: true,
        disableHostCheck: true
    },
    resolve:{
      extensions : ['.vue','.js','.json']
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
                        postcss: [require('postcss-position'), require('postcss-cssnext')(),require('postcss-bem')(),require('postcss-short')({'font-size': {
    prefix: 'x'
  },
  'position': {
    disable: false
  }})]
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
