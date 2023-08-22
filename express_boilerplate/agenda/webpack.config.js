const path = require("path");

module.exports = {
    mode: "development",
    entry: "./frontend/main.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'public', "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/env"
                    ]
                }
            }
        }, 
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
};