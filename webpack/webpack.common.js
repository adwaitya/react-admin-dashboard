const path = require('path');
var fs = require('fs');
const HappyPack = require('happypack');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HappyPack({
      loaders: ['babel-loader'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'happypack/loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'happypack/loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/oidc-client/src'), resolve('node_modules/bluebird/js')],
      },
      // {
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //     },
      //   ],
      // },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: sourcePath,
    historyApiFallback: {
      disableDotRule: true,
    },
    https: {
      key: fs.readFileSync(path.join(__dirname, './certs/fuel-selfsigned.key')),
      cert: fs.readFileSync(path.join(__dirname, './certs/fuel-selfsigned.crt')),
    },
  },
  stats: 'errors-only',
};
