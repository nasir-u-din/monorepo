const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
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
  

  
  const config = {
    watchFolders: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, '../../node_modules/ui-lib'),

    ],
    resolver: {
      unstable_enableSymlinks: true, // Turn on symlink support
    },
  };
  
  module.exports = mergeConfig(getDefaultConfig(__dirname), config);