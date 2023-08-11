const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pkg = require("../package.json")

const domain = process.env.VERCEL_URL;
/** @type {import("webpack").Configuration} */
const config = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./AuthApp": "./src/bootstrap"
            },
            shared: pkg.dependencies
        })
    ]
}
module.exports = merge(common, config);