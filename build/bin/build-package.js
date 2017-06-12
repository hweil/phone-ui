'use strict';

const fs = require('fs')
const path = require('path')
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let entry = {},
    components = fs.readdirSync('./packages'),
    cssPlugins = []

components.forEach(function(component) {
    cssPlugins.push(new ExtractTextPlugin(`${component}/style.css`))
})

let root = path.resolve(__dirname, "../../");
components.forEach(function(key) {
    entry[key] =  `./packages/${key}/index.js`
})

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(root, "./dist"),
        filename: '[name]/index.js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: cssPlugins,
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
