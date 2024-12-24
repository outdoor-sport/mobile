import '@testing-library/jest-native/extend-expect';
import type { ReactNode } from 'react';

// Mock ExpoModulesCore
jest.mock('expo-modules-core', () => ({
  ...jest.requireActual('expo-modules-core'),
  NativeModulesProxy: new Proxy(
    {},
    {
      get() {
        return () => {};
      },
    },
  ),
}));

// Mock safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: { children: ReactNode }) => children,
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));