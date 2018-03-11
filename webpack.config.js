"use strict";

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTML_OPTIONS = {
    template: "./index.html",    
    favicon: 'favicon.png',
    minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
    }
};

const _get_port = () => (process.env.PORT ? process.env.PORT : 8080);

module.exports = {
    entry: [        
        "./src/index.tsx"
    ],

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },

    module: {
        rules:[
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },            
        ],
    },

    plugins: [
      new HtmlWebpackPlugin(HTML_OPTIONS),
    ],

    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },

    devtool: "source-map",

    devServer: {
      port: _get_port(),
      contentBase: "./",
      historyApiFallback: true
    }
};