import webpack from 'webpack';
import merge from 'webpack-merge';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import baseConfig from './../webpack.config.babel';

const PROJECT_ROOT = path.resolve('.');

module.exports = merge(baseConfig, {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.join(PROJECT_ROOT, '/src/sass'),
        loader: ExtractTextPlugin.extract(
          'css-loader',
          'sass-loader',
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/asset/style.css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
