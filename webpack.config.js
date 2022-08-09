const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: "babel-loader"
      }
    ]
  },
  devtool: "source-map"
}