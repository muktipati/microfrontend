const { merge } = require('webpack-merge');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const moduleFederationConfig = require('./modulefederation.config');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
  plugins: [
    ...moduleFederationConfig.plugins, // Spread the plugins array to include ModuleFederationPlugin
  ],
};

module.exports = merge(commonConfig, devConfig);
