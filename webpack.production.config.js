const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotEnvPlugin = require('dotenv-webpack')

module.exports = {
  entry: {
    // CODE SPLITTING
    // FORMA ERRADA 
  
    // index: './src/index.js',
    // home: './src/pages/home/index.js',
    // contact: './src/pages/contact/index.js',

    // CODE SPLITTING
    // FORMA CORRETA (COMPONENTES EM COMUM EXPORTADOS SEPARADAMENTE)
    index: {
      import: './src/index.js',
      dependOn: 'components'
    },
    home: {
      import: './src/pages/home/index.js',
      dependOn: 'components'
    },
    contact: {
      import: './src/pages/contact/index.js',
      dependOn: 'components'
    },
    components: './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    // RESOLVE QUESTÃO DE CACHE DO PROJETO
    filename: './[name].[contenthash].js'
  },
  mode: "production",
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: path.resolve(__dirname, 'src')
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
    // CRIA HTML DINAMICAMENTE COM BASE NO TEMPLATE EM PUBLIC
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new DotEnvPlugin({ path: './.env.production' })
  ],
  optimization: {
    runtimeChunk: true
  }
}