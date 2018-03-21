const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        css: './src/index.scss'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Webpack Starter',
            links: [{rel: 'stylesheet', type: 'text/css', href: '/index.css'}]
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['index.css'],
            append: false
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'index.css'
                    }
                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
            ]
        }]
    }
};
