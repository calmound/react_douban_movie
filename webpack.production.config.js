const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/main.js",
  output:{
    path:__dirname + '/build',
    filename:"bundle.js"
  },
  devtool:'eval-source-map',
  devServer:{
    contentBase:'./public',
    historyApiFallback:true,
    inline:true,
    hot:true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:"babel-loader"
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[{
            loader:"style-loader"
          },{
            loader:"css-loader",
            option:{
              modules:true
            }
          },{
            loader:"postcss-loader"
          }
        ]
      },
      plugins:[
        new webpack.BannerPlugin('版权所有'),
        new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
      ]
    ]
  }
}
