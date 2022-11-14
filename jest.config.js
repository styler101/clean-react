module.exports = {
  roots: ['<rootDir>/src'], // diretório raiz,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
