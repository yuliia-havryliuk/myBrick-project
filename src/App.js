import React from 'react';
import './App.css';
import MyBrickApp from './components/MyBrickApp/MyBrickApp';
import { withRouter } from 'react-router-dom';

function App() {
  return <MyBrickApp />;
}

export default withRouter(App);
