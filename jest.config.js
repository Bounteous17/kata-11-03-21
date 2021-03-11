const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  testPathIgnorePatterns: ['dist', 'config'],
  collectCoverageFrom: [
    'components/**/*.js',
    '!test/**/*.*',
    '!**/node_modules/**',
    '!**/_templates/**',
    '!*.config.js',
  ],
  reporters: [
    'default',
    ['jest-junit',
      {
        outputDirectory: './test-reports',
      },
    ],
  ],
};
