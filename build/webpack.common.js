const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const utils = require('./utils')
const config = require('../config')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        alias: {
            "@src": path.join(__dirname, "src")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: 10000,
                            name: utils.assetsPath('media/[name].[hash].[ext]')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css?_=[chunkhash]',
            chunkFilename: utils.assetsPath('css/[id].css?_=[chunkhash]')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: utils.resolve('public'),
                    to: config.build.assetsSubDirectory,
                    globOptions: {
                        ignore: [".*"]
                    }
                }
            ]
        }),
    ]
}
