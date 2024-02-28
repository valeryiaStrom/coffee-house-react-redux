const path = require("path");
module.exports = (env, options) => {
  const isProd = options.mode === "production";

  const config = {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "eval" : "source-map",
    watch: !isProd,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      assetModuleFilename: "static/images/[hash][ext]",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg)$/,
          type: "asset",
        },
      ],
    },
  };
  return config;
};
