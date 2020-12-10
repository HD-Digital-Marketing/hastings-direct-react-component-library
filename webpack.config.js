const env = process.env.NODE_ENV
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    optimization: {
        // Increment IDs when changed when the order of resolving is changed
        moduleIds: 'hashed',

        // Create the runtime bundle for all chunks containing the bootstrap code for Webpack
        runtimeChunk: {
            name: 'runtime'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    watch: process.env.NODE_ENV !== 'production',
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackRootPlugin()
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        pathinfo: false,
        // Set filename of bundle if production or development mode is used
        filename: env === 'production' ? 'js/min/[name].bundle.min.js?[contenthash:8]' : 'js/[name].bundle.js'
    }
}
