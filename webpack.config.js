const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    // mode: 'development',
  mode: 'production',
    entry: {
        index: "./src/assets/scripts/index-app.js"
    },
    output: {
        filename: "wather-three.js"
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            // publicPath: 'assets',
            //   outputPath: (url, resourcePath, context) => {
            //     // `resourcePath` is original absolute path to asset
            //     // `context` is directory where stored asset (`rootContext`) or `context` option

            //     // To get relative path you can use
            //     const relativePath = path.relative(context, resourcePath);
            //     return relativePath.replace(/src/, '')
            // },
          },
        },
      ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;