// eslint-disable-next-line no-undef
module.exports = {
  preset: 'react-native',
  cacheDirectory: './cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|react-navigation-stack|@react-navigation|react-navigation|static-container)',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  timers: 'fake',
}
