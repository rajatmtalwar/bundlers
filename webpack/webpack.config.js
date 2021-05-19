var HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var path = require("path");
module.exports = {
  entry: ["./src/index.js", "./src/bar.js"],
  output: {
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
    new ExtractCssChunks({ filename: "[name].css", chunkFilename: "[id].css" }),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // "style-loader", // Injects CSS to DOM
          MiniCssExtractPlugin.loader,
          // ExtractCssChunks.loader,
          "css-loader", // Loads CSS
        ],
      },
    ],
  },
};
