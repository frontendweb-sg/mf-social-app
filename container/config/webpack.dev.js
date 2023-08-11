const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkg = require("../package.json")

/** @type {import("webpack").Configuration} */
const config = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:3000/"
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: {
            index: "/"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                auth: "auth@http://localhost:3001/remoteEntry.js"
            },
            shared: pkg.dependencies
        })
    ]
}
module.exports = merge(common, config);