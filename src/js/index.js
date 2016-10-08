require('../css/main.css');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import Container from './components/container';
// use composed middlewares for development only
const middlewares = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// create store with middlewares for development only
const store = createStore(reducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('app')
);
