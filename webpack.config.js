var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './js/init.js'
    ],
    output: {
        filename: '[name].js',
        path: './build/',
        publicPath: '/build/'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react'
                ]
            }
        }]
    }
};
