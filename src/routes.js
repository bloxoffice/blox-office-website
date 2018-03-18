import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Dashboard from 'containers/Dashboard';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Router;
