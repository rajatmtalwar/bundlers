var HtmlWebpackPlugin = require("html-webpack-plugin");
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
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", // Injects CSS to DOM
          "css-loader", // Loads CSS
        ],
      },
    ],
  },
};
