var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var cssExtractor = new ExtractTextPlugin('css/style.css');
var lessExtractor = new ExtractTextPlugin('css/bootstrap.css');

module.exports = {
  entry: {
    index: './demo/index.jsx',
  },
  output: {
    path: './demo_build/',
    filename: '[name].js',
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        exclude: "/node_modules/"
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
        /*loaders: ["style","css","less"],*/
        exclude: "/node_modules/"
      },
      {
        test: /\.jsx?$/,
        loaders:['react-hot','babel?presets[]=es2015&presets[]=react'],
    /*    query: ['es2015','react'],*/
        exclude: "/node_modules/",
        include: path.resolve(__dirname, 'demo')
      },
      {
        test   : /\.woff/,
        loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
      }, {
        test   : /\.ttf/,
        loader : 'file?prefix=font/'
      }, {
        test   : /\.eot/,
        loader : 'file?prefix=font/'
      }, {
        test   : /\.svg/,
        loader : 'file?prefix=font/'
      }

    ]
  },
  resolve: {
    extensions: ['','.js',".css",'.jsx'],  //自动补全识别后缀
  },
  devServer: {
    hot: true,
    inline: true,
  },
  plugins:[
    new htmlWebpackPlugin({
      title:"react bootstrap",
      chunks: ["index"]
    }),
    cssExtractor,
    lessExtractor
  ]
};
