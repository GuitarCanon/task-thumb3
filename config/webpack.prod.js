const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
            'process.env.NODE_ENV': '"prod"',
        }),
        new ExtractTextPlugin("css/[name]-[hash:5].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/common/vendor-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({
            filename: '../views/layout.html',
            template: 'src/views/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: '../views/index.html',
            template: 'src/views/index.html',
            
        })
    ]
}