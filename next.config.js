// next.config.js
const withCSS = require('@zeit/next-css');
const jsdomglobal = require('jsdom-global');
const uikit = require('uikit');

module.exports = withCSS({
  /* config options here */
  plugins: [jsdomglobal, uikit]
});
