import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../app/routes';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store, history } = this.props;
    return (
        <div>
          <Provider store={store}>
            <div>
              <Router history={history} routes={routes}/>
            </div>
          </Provider>
        </div>
    );
  }
}

export default Root;
