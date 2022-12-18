const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js',
        server: './src/server.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Mail',
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HTMLWebpackPlugin({
            title: 'Mail Item',
            template: './src/item.html',
            filename: 'item.html',
            chunks: ['item']
        }),
        new MiniCssExtractPlugin({
            filename: './style/.[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js&/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    target: 'node'
}