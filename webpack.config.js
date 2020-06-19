const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'env', "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(png|svg|jpg)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8096,
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ]
};
