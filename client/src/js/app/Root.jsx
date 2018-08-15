import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../app/routes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mui_default } from '../../assets/mui-theme';

class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { store, history } = this.props;
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(mui_default)}>
          <div>
            <Provider store={store}>
              <div>
                <Router history={history} routes={routes}/>
              </div>
            </Provider>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default Root;
