import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Dashboard from 'containers/Dashboard';
import ChangePassword from 'containers/ChangePassword';
import Profile from 'containers/Profile';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/changepassword" component={ChangePassword} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default Router;
