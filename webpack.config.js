var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  entry:  __dirname + "/app/App.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react'],
        "env": {
          "development": {
            "presets": ["react-hmre"]
          }
        },
        "plugins": [
          "transform-decorators-legacy",
          "transform-class-properties"
        ]

      }
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;