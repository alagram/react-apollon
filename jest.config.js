module.exports = {
  moduleNameMapper: {
    '^.+\\.(css)$': '<rootDir>/config/CSSStub.js',
  },
  setupTestFrameworkScriptFile: './src/tests/jestSetup.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
