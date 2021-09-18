// We need to use Node's CommonJS syntax here since Node doesn't support ES modules yet.
// Alternatively, we could also use babel-node to transpile our code for Node.
// [Cory House - Building Applications with React and Redux](https://www.pluralsight.com/courses/react-redux-react-router-es6)

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
    liveReload: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
