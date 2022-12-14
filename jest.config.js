module.exports = {
  modulePaths: [
    "<rootDir>",
  ],
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '<rootDir>/jest.setup.js'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/src/**/*.test.[jt]s?(x)',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/bin/',
    '<rootDir>/coverage/',
    '<rootDir>/cypress/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
    'jest.config.js',
    'next.config.js',
    'cypress.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
    'sentry.client.config.js',
    'sentry.server.config.js',
    '<rootDir>/src/components/icon/',
    '<rootDir>/src/pages/404.tsx',
    '<rootDir>/src/pages/_error.tsx',
    '<rootDir>/src/pages/sentry_sample_error.tsx',
    '<rootDir>/src/pages/api/',
    '<rootDir>/src/services/',
    '<rootDir>/src/types/',
    '_app',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
