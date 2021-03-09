const path = require("path");
// console.log(path.resolve()); 

module.exports = {
  mode: "development", //还有production模式
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules:[{
      // test: /\.less$/,
      // use: ['style-loader', 'css-loader', {
      //     loader: 'postcss-loader',
      //     options: {
      //         plugins: [
      //             require('autoprefixer'),
      //             //require('cssnano'),<= 需去掉，因为会去掉注释
      //             require('postcss-px2rem')({
      //                 remUnit: 75
      //             })
      //         ],
      //     }
      // }, 'less-loader']
      //     fallback: 'style-loader'
      // })
    }]
  }
};