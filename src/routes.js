import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

export default Router;
