const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./views/react-fe/index.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "public/react"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./views/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "views", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }, 
    ],
  },
  watch:true,
  watchOptions: {
   
    ignored: '**/node_modules',
  },
};