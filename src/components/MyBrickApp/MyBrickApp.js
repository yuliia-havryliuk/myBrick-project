import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Layout from '../Layout/Layout';
import Registration from '../Navigation/Registration/Registration';
import Instruction from '../Navigation/Instruction/Instruction';
import HomePage from '../Navigation/HomePage/HomePage';
import LogIn from '../Navigation/LogIn/LogIn';
import BrickInner from './BrickInner/BrickInner';

function MyBrickApp() {
  return (
    <div>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/instruction">
            <Instruction />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route
            path="/bricks/:id"
            render={props => <BrickInner {...props} />}
          />
          <Route path="*">
            <h2>Sorry this page doesn't exist :(</h2>
          </Route>
        </Switch>
    </div>
  );
}
export default MyBrickApp;
