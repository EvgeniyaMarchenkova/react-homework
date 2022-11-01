const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        rules: [ {
            test: /\.js*/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
         }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '/src/index.html'
        })
    ]
}