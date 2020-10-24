module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testRegex: '\\.(spec)\\.(ts)$',
  collectCoverage: true,
  coverageDirectory: `./reports/`,
  transformIgnorePatterns: ['node_modules/(?!@ngrx|moment|@ionic/storage|@ionic-native|br-mask)']
};