const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es6'),
            path.join(__dirname, '../src/public/scripts/indexadd.es6')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es6')
        ]
    },
    output: {
        path: path.join(__dirname, '../build/public/'),
        filename: 'scripts/[name]-[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"',
        }),
        new ExtractTextPlugin("css/[name]-[hash:5].css")
    ]
}