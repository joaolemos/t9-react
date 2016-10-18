var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  devServer: {
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
