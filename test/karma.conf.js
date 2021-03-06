'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['firefox_latest'],
    client: {
      captureConsole: true,
      mocha: { 'ui': 'tdd' }
    },
    basePath: '../',

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.udpsocket.enabled': true
        }
      }
    },

    files: [
      'dist/fxos-zeroconf.js',
      'test/mock/navigator-moztcpsocket.js',
      'test/unit/zeroconf.js'
    ]
  });
};
