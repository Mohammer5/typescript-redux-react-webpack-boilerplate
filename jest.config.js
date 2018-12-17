var path = require('path');

module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  roots: [
    '../src'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.s?css$': path.join(__dirname, 'node_modules', 'jest-css-modules')
  },
  testRegex: '\\.test\\.(ts|tsx|js)$',
  globals: {
    'ts-jest': {
  	  tsConfig: path.join(__dirname, 'tsconfig.json'),
    },
  },
};
