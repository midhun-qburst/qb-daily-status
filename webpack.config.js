const webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/'),
  JS: path.resolve(__dirname, 'src/js'),
};

let config = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  devServer: {
    inline:true,
    port:8085
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
      new UglifyJsPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   minimize: true,
    //   compressor: {
    //     warnings: false,
    //   },
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-class-properties"]
          }
        }        
       },
       {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
module.exports = config;
