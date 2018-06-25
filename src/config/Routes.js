import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import WinesContainer from '../containers/WinesContainer.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/wines' component={ WinesContainer } />
  </Switch>
)