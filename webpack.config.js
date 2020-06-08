const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.js'
  },

  devServer: {
    publicPath: '',
    port: 9000,
    contentBase: path.join(process.cwd(), 'dist'),
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    hot: true,
  },

  module: {
    rules: [
      // css || sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // file || image
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new FaviconsWebpackPlugin({
      logo: './src/img/icon.png', // svg works too!
      filename: '[name].[ext]',
      publicPath: '',
      prefix: 'img/icon/'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]

};