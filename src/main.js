import React from 'react';
import { createStore, applyMiddleware } from 'redux';

// Lines 5 and 6 accomplish the same thing
// import ReactDom from 'react-dom';
import { render as renderDom } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import expensesReducer from './reducer/reducer-expense';
import './style/main.scss';

// Setting up the Redux store here
const middleware = {};

// this if function composition
const store = createStore(expensesReducer, composeWithDevTools(applyMiddleware(...middleware)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);
