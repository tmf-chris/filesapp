import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../app/routes';

const Root = ({ store, history }) =>
    <div>
      <Provider
          store={store}
      >
        <div>
          <Router
              history={history}
              routes={routes}
          />
        </div>
      </Provider>
    </div>;

export default Root;
