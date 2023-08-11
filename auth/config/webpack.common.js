const path = require('path');
const Html = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new Html({
            title: "Social app: auth",
            meta: {},
            template: path.resolve(__dirname, "..", "public/index.html")
        })
    ]
}