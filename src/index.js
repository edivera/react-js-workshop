import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// imports to make this a redux application as well
import {Provider as ReduxProvider} from 'react-redux';
import {applyMiddleware as applyReduxReducerWrapper, 
  createStore as storeCreator} from 'redux'
  // reducerWrapper has dispatch and getState

import promiseMiddleware from 'redux-promise'

import App from './components/App';
import Heading from './components/Heading';
import PeopleList from './components/PeopleList';
import rootReducer from './reducers/index';

const createReduxReducerStore = applyReduxReducerWrapper(promiseMiddleware)(storeCreator)

// definitely need the react dom render
// we added a redux provider to use the redux framework
// we can add a browserrouter with switches which have
// different routes
// {App} two way bind
ReactDOM.render(
  <ReduxProvider store={createReduxReducerStore(rootReducer)}>
    <BrowserRouter>
      <Heading/>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
);
