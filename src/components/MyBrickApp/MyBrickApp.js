import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Layout from '../Layout/Layout';
import Registration from '../Navigation/Registration/Registration';
import Instruction from '../Navigation/Instruction/Instruction';
import HomePage from '../Navigation/HomePage/HomePage';
import LogIn from '../Navigation/LogIn/LogIn';

function MyBrickApp() {
  return (
    <div>
      <Navigation />
      <Layout>
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
      </Layout>
    </div>
  );
}
export default MyBrickApp;
