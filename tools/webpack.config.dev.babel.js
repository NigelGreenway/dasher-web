import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import baseConfig from './../webpack.config.babel';

const PROJECT_ROOT = path.resolve('.');

module.exports = merge(baseConfig, {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.join(PROJECT_ROOT, '/src/sass'),
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'source-source-map',
  devServer: {
    inline: true,
    contentBase: 'public',
    host: '0.0.0.0',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  watch: true,
});
