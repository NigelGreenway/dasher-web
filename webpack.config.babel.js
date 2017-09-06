import webpack from 'webpack';
import FlowStatusWebpackPlugin from 'flow-status-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';


module.exports = {
  entry: path.join(__dirname, '/src/app.jsx'),
  output: {
    filename: 'dasher.js',
    path: path.join(__dirname, '/build'),
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '/src'),
        exclude: path.join(__dirname, '/node_modules/'),
        loaders: [
          'react-hot-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.hbs$/,
        exclude: path.join(__dirname, '/node-modules/'),
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new FlowStatusWebpackPlugin({
      restartFlow: true,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Dasher App',
      template: 'src/templates/index.hbs',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
