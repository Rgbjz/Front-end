const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/about.html"),
      filename: "about.html",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["dist/*"],
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/photo.jpg", to: "photo.jpg" }, // Здесь указываем путь к фотографии в src и путь, куда ее скопировать в dist
      ],
    }),
  ],
};