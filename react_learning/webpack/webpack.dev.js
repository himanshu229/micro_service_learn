const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    // allowedHosts: "all",
    // historyApiFallback: true,
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers":
    //     "X-Requested-With, content-type, Authorization",
    // },
    // webSocketServer: false,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("himanshu"),
    }),
  ],
};
