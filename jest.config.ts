import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: [
    '<rootDir>/node_modules/react-native/jest/setup.js',
    '<rootDir>/jest.setup.ts'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@react-native/(.*)$': '<rootDir>/src/infrastructure/react-native/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '^react-native$': 'react-native-web',
    '^react-native/(.*)$': 'react-native-web/$1'
  },
  testMatch: [
    '**/__tests__/**/*.test.[tj]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  roots: ['<rootDir>'],
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  }
};

export default config;