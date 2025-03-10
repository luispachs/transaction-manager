/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  extensionsToTreatAsEsm: ['.ts'],
  fakeTimers: {
    doNotFake: ['nextTick'],
    timerLimit: 5000
  },
  forceCoverageMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset:"ts-jest"
};

export default config;
