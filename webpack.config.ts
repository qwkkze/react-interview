import * as path from 'path';
import webpack, { Configuration } from 'webpack';
import 'webpack-dev-server';

const mode = 'development';

const handler = (percentage, message, ...args) => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`Progress: ${(percentage * 100).toFixed(0)}%`);
};

const config: Configuration = {
  plugins: [
    new webpack.ProvidePlugin({ process: 'process/browser' }),
    new webpack.ProgressPlugin(handler),
  ],
  devtool: mode === 'development' ? 'eval-source-map' : false,
  mode: mode,
  entry: [path.join(__dirname, 'src/index.tsx')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: 'only',
    liveReload: false,
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    client: {
      progress: false,
      logging: 'info',
      overlay: {
        errors: false,
        warnings: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, 'node_modules'), path.resolve(__dirname)],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'linkTag',
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /(?<!global)\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[local]_[hash:base64]',
                exportLocalsConvention: 'camelCase',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname)],
              },
            },
          },
        ],
      },
      {
        test: /global\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname)],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
