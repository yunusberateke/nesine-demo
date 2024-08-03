const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@betsPage':  path.resolve(__dirname, 'src/pages/Bets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    allowedHosts: 'all',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  performance: {
    hints: false
  }
};