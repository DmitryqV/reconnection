const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

require("dotenv").config();

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../backend/src/static"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules", "public", "sockets"],
    alias: {
      "@global": "src/global/",
      "@sockets": "sockets/",
      "@views": "src/views/",
      "@src": "src/",
    },
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("ts-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
