import { setupServer } from 'msw/node';
// import authApiHandlers from 'src/shared/auth/mocks/auth.api.mock';

export const server = setupServer(/*...authApiHandlers*/);
