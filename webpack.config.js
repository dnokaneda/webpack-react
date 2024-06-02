const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    // RESOLVE QUESTÃO DE CACHE DO PROJETO
    filename: './[name].[contenthash].js'
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        // SEPARA ARQUIVO CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    // REMOVE ARQUIVOS DESNECESSÁRIOS NO DIST
    new CleanWebpackPlugin(),
    // SEPARA ARQUIVO CSS
    new MiniCssExtractPlugin({
      filename: './styles.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
}