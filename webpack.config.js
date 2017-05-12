const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}