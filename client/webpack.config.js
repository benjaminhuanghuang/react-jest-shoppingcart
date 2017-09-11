const path = require("path");

var config = {
  entry: ["./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js" // place where bundled app will be served
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // search for js files
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"] // use es2015 and react
        }
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  }
};
module.exports = config;
