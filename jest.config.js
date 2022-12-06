module.exports = {
  preset: 'ts-jest',

  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest'],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '#(.*)': '<rootDir>/node_modules/$1',
    'chart.js': '<rootDir>/node_modules/chart.js',
    '^(pages|components|store|styles|types|utils|apis)/(.*)':
      '<rootDir>/src/$1/$2',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
