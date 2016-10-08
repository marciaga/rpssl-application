'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new CleanWebpackPlugin(['build'], {
   'exclude': ['index.html', 'favicon.ico'],
   root: process.cwd()
  })
];

var common = {
    env: process.env.NODE_ENV,
    entry: {
        main: path.join(__dirname, 'src/js'),
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: /node_modules/
            },
        ]
    }
};

var config;

if (LIFECYCLE_EVENT === 'start' || !LIFECYCLE_EVENT) {
    config = merge(
        common, {
        plugins: plugins,
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            progress: true,
            hot: true,
            stats: 'errors-only',
            inline: true,
            host: '127.0.0.1',
            port: 8080
        }
    });
} else {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        })
    );

    config = merge(common, {
        plugins: plugins
    });
}

module.exports = config;
