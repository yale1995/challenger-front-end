module.exports = {
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^react($|/.+)": "<rootDir>/node_modules/react$1",
      "\\.(scss|css|sass)$": "identity-obj-proxy",
    },
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.tsx",
      "!src/**/*.spec.tsx",
      "!src/**/_app.tsx",
      "!src/**/_document.tsx",
    ],
    coverageReporters: ["lcov", "json"],
  };
  