var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var configuration = {
    entry: {
        app: path.resolve(__dirname+"/src/jsx/app.jsx")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "stage-0", 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}

module.exports = configuration;
