var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    //path: path.resolve(__dirname, 'dist'),
    path: __dirname,
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/')
        ],
        loader: "babel-loader",
        options: {
         presets: ['react', 'es2015', 'stage-1']
       }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
 devServer: {
   historyApiFallback: true,
   //hot: true, //dosen't work for some reason!! 
   contentBase: './'
 }
};
