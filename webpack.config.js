const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry:{
      bundle: path.resolve(__dirname, 'src/battleDisplay.js'),
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      clean: true,
   },
   devServer: {
      static: './dist',
      port: 8080, // Adjust the port as needed
      open: true // Automatically open the browser
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Battleship Game',
         filename: 'index.html',
         template: 'src/template.html',
      }),
   ],
}