const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction ? "/earove/" : "/";
  const siteUrl = "https://riibiax.github.io/earove/";
  const siteTitle = "Andrea Rovescalli";
  const siteDescription = "Portfolio of Andrea Rovescalli, interaction designer and creative technologist working across digital experiences, installations, games, and spatial design.";

  return {
    entry: "./src/js/App.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "main.[contenthash].js" : "main.js",
      chunkFilename: isProduction ? "[name].[contenthash].main.js" : "[name].main.js",
      publicPath,
      clean: true,
    },
    devtool: isProduction ? false : "eval-cheap-module-source-map",
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
    optimization: {
      chunkIds: "deterministic",
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        chunks: "async",
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "async",
          },
        },
      },
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
<html lang="en">
<head>
  <title>Andrea Rovescalli</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
  <meta name="description" content="${siteDescription}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#000000">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <link rel="canonical" href="${siteUrl}">
  <meta property="og:url" content="${siteUrl}">
  <meta property="og:image" content="${siteUrl}img/kf/kf.png">
  <meta property="og:site_name" content="${siteTitle}">
  <meta property="og:title" content="${siteTitle}">
  <meta property="og:type" content="website">
  <meta property="og:description" content="${siteDescription}">
  <meta property="og:locale" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${siteTitle}">
  <meta name="twitter:description" content="${siteDescription}">
  <meta name="twitter:image" content="${siteUrl}img/kf/kf.png">
  <meta name="apple-mobile-web-app-title" content="${siteTitle}">
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
