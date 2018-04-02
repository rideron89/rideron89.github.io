const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "ts", "main.ts"),

    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("css-loader?url=false!sass-loader") },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ]
    },

    resolve: {
        extensions: [ ".scss", ".ts" ]
    },

    plugins: [
        new ExtractTextPlugin({ filename: "bundle.css", allChunks: true })
    ]
};