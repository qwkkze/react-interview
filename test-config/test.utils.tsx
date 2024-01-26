//@ts-nocheck
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { createMemoryHistory, MemoryHistory } from 'history';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { RootState, setupStore, Store } from 'src/store';

interface TestSetupResult {
  event: UserEvent;
  component: RenderResult;
  history: MemoryHistory;
  store: Store;
}

interface AppRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
}

function setup(
  component: React.ReactElement,
  appRenderOptions: AppRenderOptions = {},
): TestSetupResult {
  const { preloadedState, ...renderOptions } = appRenderOptions;
  const history = createMemoryHistory();
  const store = setupStore(preloadedState);

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <HistoryRouter history={history}>
        <Provider store={store}>{children}</Provider>
      </HistoryRouter>
    );
  }

  return {
    event: userEvent.setup(),
    component: render(component, { wrapper: Wrapper, ...renderOptions }),
    history,
    store,
  };
}

const createRouterWrapper =
  (history: MemoryHistory) =>
  ({ children }: { children: React.ReactNode }) => {
    children;
  };

export default setup;
