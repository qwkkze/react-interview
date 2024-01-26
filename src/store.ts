import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { appStore } from 'src/app/app.store';
import { postsStore } from 'src/posts/posts.store';

const rootReducer = combineReducers({
  app: appStore.reducer,
  posts: postsStore.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({ reducer: rootReducer, preloadedState });
}

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store['dispatch'];
