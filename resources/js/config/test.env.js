'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

export const environment = {
  production: false,
  apiUrl: "http://klk.leagueofclicks.com/api/auth/"
};

// module.exports = merge(devEnv, {
//   NODE_ENV: '"testing"'
// })
