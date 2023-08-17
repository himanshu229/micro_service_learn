const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
require('dotenv').config()
module.exports = () => {
  const envConfig = require(`./webpack.prod.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
