const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction ? "/earove/" : "/";

  return {
  entry: "./src/js/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? "main.[contenthash].js" : "main.js",
    chunkFilename: isProduction ? "[name].[contenthash].main.js" : "[name].main.js",
    publicPath,
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico|pdf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_APP_BASENAME": JSON.stringify("/"),
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "main.[contenthash].css" : "main.css",
      chunkFilename: isProduction ? "[name].[contenthash].main.css" : "[name].main.css",
    }),
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => `<!doctype html>
<html>
<head>
  <title>Andrea Rovescalli</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <meta name="description" content="Andrea Rovescalli Rove Haute Ecole Geneve cv Portfolio Head Milano Politecnico Design Interaction Art Designer Interactive Ars Electronica Solutions UDIMU Linz Lausanne aes aec ozwe video games unity creative coder">
  <meta name="robots" content="index, follow">
  <meta property="og:url" content="http://www.earove.info">
  <meta property="og:image" content="${publicPath}d8210a18b13b602bc230.ico">
  <meta property="og:site_name" content="Andrea Rovescalli">
  <meta property="og:title" content="Andrea Rovescalli">
  <meta property="og:type" content="website">
  <meta property="og:description" content="Andrea Rovescalli Rove Haute Ecole Geneve cv Portfolio Head Milano Politecnico Design Interaction Art Designer Interactive Ars Electronica Solutions UDIMU Linz Lausanne aes aec ozwe video games unity creative coder">
  <link rel="shortcut icon" href="${publicPath}d8210a18b13b602bc230.ico" type="image/x-icon">
  <link rel="icon" type="image/x-icon" href="${publicPath}d8210a18b13b602bc230.ico">
  ${htmlWebpackPlugin.tags.headTags}
</head>
<body>
  <div id="root"></div>
  ${htmlWebpackPlugin.tags.bodyTags}
</body>
</html>`,
      inject: false,
      minify: isProduction,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "img", to: "img", noErrorOnMissing: true },
        { from: "docs", to: "docs", noErrorOnMissing: true },
        { from: "d8210a18b13b602bc230.ico", to: "d8210a18b13b602bc230.ico", noErrorOnMissing: true },
        { from: "playframe.html", to: "playframe.html", noErrorOnMissing: true },
        { from: "sitemap.xml", to: "sitemap.xml", noErrorOnMissing: true },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    hot: true,
    port: 8080,
  },
};
};
