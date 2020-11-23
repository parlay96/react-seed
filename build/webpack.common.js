const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const utils = require('./utils')
const config = require('../config')

// 创建eslint规则
const createLintingRule = () => ({
    test: /\.(j|t)sx?$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [utils.resolve('src'), utils.resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: config.dev.showEslintErrorsInOverlay
    }
})

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        alias: {
            "@src": path.join(__dirname, "src")
        },
        plugins: [
            new TsconfigPathsPlugin({
                 configFile: utils.resolve('tsconfig.json'),
                 extensions: [".js", ".ts", ".jsx", ".tsx"]
            })
        ],
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                // test: /\.(js|jsx|ts|tsx)$/,
                test: /\.(j|t)sx?$/,
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
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                utils.resolve('src/themes/common.scss')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('media/[name].[hash].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('fonts/[name].[hash].[ext]')
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash].[ext]')
                }
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
