const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };
  
  const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
  const path = require('path');
  
  const config = {
    watchFolders: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, '../../node_modules/app'),
    ],
  };
  
  module.exports = mergeConfig(getDefaultConfig(__dirname), config);