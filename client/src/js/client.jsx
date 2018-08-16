import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/root_reducer';
import Root from './app/Root';
var favicon = require('../assets/images/favicon-32x32.ico');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('app')
);