const commonConfig = require("./build-tools/webpack.common.js");
const webpackMerge = require("webpack-merge");

module.exports = env => {
  const envConfig = require(`./build-tools/webpack.${env}.js`);
  return webpackMerge(commonConfig, envConfig);
}