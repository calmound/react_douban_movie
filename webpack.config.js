const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:'eval-source-map',
  // __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry: __dirname + "/app/main.js",
  output:{
    path:__dirname + "/public",
    filename:'bundle.js'
  },

  devServer:{
    contentBase:"./public",
    historyApiFallback:true,
    inline:true,
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.json$/,
        loader:"json-loader"
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },{
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'
          },{
            loader:'css-loader'
          },{
            loader:'postcss-loader'
          }
        ]
      },{
        test: /\.less$/,
        use: [{
         loader: "style-loader" // creates style nodes from JS strings
        }, {
         loader: "css-loader" // translates CSS into CommonJS
        }, {
         loader: "less-loader" // compiles Less to CSS
        }]
      },
       { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000&name=img/[name].[ext]'},
    ]
  },
  plugins:[
    new webpack.BannerPlugin('版权所有'),
    new HtmlWebpackPlugin({
      template:__dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
