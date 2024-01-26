import '@testing-library/jest-dom';
import { server } from 'test-config/msw.server';

/*
 * Fix for: window.matchMedia is not a function
 * https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
 */
Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/*
 * Since we are not testing auth, we just assume that the user is logged in
 * This module is used only once to get auth cookie so for now it is safe to mock the whole method app-wide
 */
jest.mock('js-cookie', () => ({
  __esModule: true,
  default: { get: jest.fn(() => true) },
}));
