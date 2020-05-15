'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

export const environment = {
  production: false,
  apiUrl: "http://127.0.0.1:8000/api/auth/"
};

// module.exports = merge(devEnv, {
//   NODE_ENV: '"testing"'
// })
