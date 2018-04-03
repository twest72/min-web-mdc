const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        css: './src/index.scss'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // remove old artifacts
        new CleanWebpackPlugin(['dist']),
        // generate index html from template
        new HtmlWebpackPlugin({
            title: 'Webpack Starter',
            template: 'src/index.html'
        }),
        // includes stylesheet
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['index.css'],
            append: false
        }),
        // copies handlebars templates
        new CopyWebpackPlugin([
            {from: 'src/templates', to: 'templates/', toType: 'dir'}
        ])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // ES 6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // sass loader for material components
            {
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
                    {
                        loader: 'sass-loader',
                        options: {
                            importer: function (url, prev) {
                                if (url.indexOf('@material') === 0) {
                                    var filePath = url.split('@material')[1];
                                    var nodeModulePath = `./node_modules/@material/${filePath}`;
                                    return {file: require('path').resolve(nodeModulePath)};
                                }
                                return {file: url};
                            }
                        }
                    }
                ]
            },
            // handlebars loader
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};
