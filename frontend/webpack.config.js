const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

require("dotenv").config();

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: process.env.PORT || 3000,
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules", "public", "sockets"],
    alias: {
      "@views": "src/views/",
      "@global": "src/global/",
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
