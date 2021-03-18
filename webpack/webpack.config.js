var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
  entry: ["./src/index.js", "./src/bar.js"],
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
