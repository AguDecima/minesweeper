module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],
    collectCoverageFrom: ["./src/**/*.js"],
    transform: {
      "\\.js$": "<rootDir>/node_modules/babel-jest",
      "\\.jsx$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/'
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageReporters: ["text"]
  };
