const Nucleus = require('./plugins/Nucleus')
const WriteFilePlugin = require('write-file-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  css: {
    extract: true,
    sourceMap: process.env.NODE_ENV === 'development',
    loaderOptions: {
      sass: {
        outputStyle: 'expanded',
        sourceMap: process.env.NODE_ENV === 'development'
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.delete('optimize-css')
    }
  },
  configureWebpack: {
    devtool: '#source-map',
    plugins: [
      new Nucleus(),
      new CleanWebpackPlugin(['dist/css', 'dist/styleguide'], { watch: true }),
      new WriteFilePlugin({
        // Write only files that have ".css" extension.
        test: /\.css$/,
        useHashIndex: true
      }),
      new WriteFilePlugin({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        useHashIndex: true
      })
    ]
  },
  productionSourceMap: false
}
