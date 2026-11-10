const path = require("path");
const { execFileSync } = require("node:child_process");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { homepage } = require("./package.json");
const { renderDocument, renderSitemap } = require("./scripts/page-template.cjs");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction ? new URL(homepage).pathname : "/";
  const { name, pages, documentUrls } = JSON.parse(execFileSync(process.execPath, ["scripts/render-pages.cjs"], {
    cwd: __dirname,
    env: { ...process.env, PORTFOLIO_BASE_PATH: publicPath },
    encoding: "utf8",
    maxBuffer: 8 * 1024 * 1024,
  }));

  return {
    entry: "./src/js/App.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "main.[contenthash].js" : "[name].js",
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
        {
          test: /\.(woff2?|ttf)$/i,
          type: "asset/resource",
          generator: { filename: "fonts/[name].[contenthash][ext]" },
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
        "process.env.PORTFOLIO_BASE_PATH": JSON.stringify(publicPath),
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "main.[contenthash].css" : "main.css",
        chunkFilename: isProduction ? "[name].[contenthash].main.css" : "[name].main.css",
      }),
      ...pages.map((page) => new HtmlWebpackPlugin({
        filename: `${page.path.slice(1)}index.html`,
        templateContent: ({ htmlWebpackPlugin }) => renderDocument(page, name, publicPath, htmlWebpackPlugin.tags),
        inject: false,
        minify: isProduction,
      })),
      new HtmlWebpackPlugin({
        filename: "sitemap.xml",
        templateContent: () => renderSitemap([...pages.map(({ url }) => url), ...documentUrls]),
        chunks: [],
        inject: false,
        minify: false,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "img", to: "img", noErrorOnMissing: true },
          // The legacy loader reads some .js model files as JSON. Copy the web edition verbatim.
          { from: "src/visualizations/tabak-fabrik", to: "visualizations/tabak-fabrik", info: { minimized: true } },
          { from: "docs", to: "docs", noErrorOnMissing: true },
          // Keep older public CV URLs valid using the current approved editions.
          { from: "docs/andrea-rovescalli-skills-en.pdf", to: "docs/rovescalli_cv.pdf" },
          { from: "docs/andrea-rovescalli-skills-fr.pdf", to: "docs/rovescalli_cv_fr.pdf" },
          { from: "docs/andrea-rovescalli-skills-it.pdf", to: "docs/rovescalli_cv_ita.pdf" },
          { from: "src/fonts/*-OFL.txt", to: "fonts/[name][ext]" },
          { from: "d8210a18b13b602bc230.ico", to: "d8210a18b13b602bc230.ico", noErrorOnMissing: true },
          { from: "d8210a18b13b602bc230.ico", to: "favicon.gif" },
          { from: ".nojekyll", to: ".nojekyll", toType: "file" },
          { from: "config/pages.gitattributes", to: ".gitattributes", toType: "file" },
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
