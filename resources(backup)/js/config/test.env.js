'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

export const environment = {
  production: false,
  apiUrl: "https://wellington.leagueofclicks.com/api/auth/",
  baseUrl: "https://wellington.leagueofclicks.com/",
  imgUrl: "https://wellington.leagueofclicks.com/",
  stripePublishableKey: "pk_test_51GsAraH9zpgoQ1TSjD70A2YceJPHAGDEPymEdBMDg2R93EWywLH1pQyGClwxUMdlaYau9alEu6sdkfheZmMV8OOL00BUsqHsLr",
  uberMapApiUrl: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
  uberMapToken: "pk.eyJ1IjoibG9jb25lIiwiYSI6ImNrYmZkMzNzbDB1ZzUyenM3empmbXE3ODQifQ.SiBnr9-6jpC1Wa8OTAmgVA"
};
