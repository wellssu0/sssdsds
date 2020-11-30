const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpackbar = require('webpackbar');

// const { compilerHooks } = require('./custom-plugins');
const constants = require('./constants');
const config = require('./config');
const { resolve, assetsPath } = require('./utils');
const env = require('./env.json');

const oriEnv = env[constants.APP_ENV];
Object.assign(oriEnv, {
  APP_ENV: constants.APP_ENV
});
// webpack process.env
const defineEnv = {};
for (const key in oriEnv) {
  defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key]);
}

const basePlugins = [
  new webpackbar(), // 打包进度条
  new MomentLocalesPlugin({
    localesToKeep: ['es-us', 'zh-cn']
  }),
  new webpack.DefinePlugin(defineEnv),
  new TypedCssModulesPlugin({
    globPattern: 'src/!(styles)/**/*.scss'
  }),
  new ForkTsCheckerWebpackPlugin({
    typescript: { configFile: resolve('tsconfig.json') },
    eslint: { enabled: true, files: resolve('src/**/*.{ts,tsx}') }
  })
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'build/tpl/index.html',
    inject: true
  }),
  new CaseSensitivePathsPlugin()
  // ...compilerHooks
];

const prodPlugins = [
  // 生产环境的打包插件
  new HtmlWebpackPlugin({
    filename: config.index,
    template: 'build/tpl/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: assetsPath('css/[name].[contenthash].css'),
    chunkFilename: assetsPath('css/[name].[id].[contenthash].css'),
    ignoreOrder: true
  }),

  // cache插件
  new WorkboxPlugin.GenerateSW({
    cacheId: 'ts-react-webpack',
    clientsClaim: true,
    skipWaiting: true,
    offlineGoogleAnalytics: false,
    inlineWorkboxRuntime: true,
    // precache ignore
    exclude: [/index\.html$/, /\.map$/],
    // dynamic update
    runtimeCaching: [
      {
        // match html
        urlPattern: config.pagePattern,
        handler: 'NetworkFirst'
      },
      {
        // match static resource
        urlPattern: config.assetsPattern,
        handler: 'StaleWhileRevalidate'
      }
    ]
  })
];

if (config.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  prodPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = basePlugins.concat(constants.APP_ENV === 'dev' ? devPlugins : prodPlugins);
