const path = require('path')
const htmlWeppackPlugin = require('html-webpack-plugin')
module.exports={
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[
    new htmlWeppackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules:[
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {test:/\.(jpg|png|gif|bmg|jpeg)$/,use:'url-loader?limit=7631'},
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
    ]
  },
  resolve:{
    alias:{
      // "vue$":"vue/dist/vue.min.js"
    }
  }
}