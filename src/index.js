import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Heading from './components/Heading';
import PeopleList from './components/PeopleList';

// definitely need the react dom
// we can add a browserrouter with switches which have
// different routes
// {App} two way bind
ReactDOM.render(
  <BrowserRouter>
    <Heading/>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
