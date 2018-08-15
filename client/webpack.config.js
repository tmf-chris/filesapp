var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname,
    devtool: "eval-source-map",
    entry: [
        'webpack-hot-middleware/client?http://localhost:5001',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/js/client.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: "client.min.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};