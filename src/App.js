import React from 'react';
import './App.css';
import MyBrickApp from './components/MyBrickApp/MyBrickApp';
import firebase from './config/fbConfig';

/*firebase.firestore().collection('times').add({
  title: 'Beauty',
  time_seconds: 45,
});*/
function App() {
  return <MyBrickApp />;
}

export default App;
