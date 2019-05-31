const path = require("path");


module.exports = {
  mode: "production",
  watch: false,
  entry: ["@babel/polyfill", path.join(__dirname, "_src", "main")],
  output: {
    filename: "./main.js",
    path: path.resolve(__dirname, "assets/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};

// https://michaelmovsesov.com/articles/jekyll-es6-workflow
