import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
let firebaseConfig = {
  apiKey: 'AIzaSyD1DSeKEtmxPQ0S77BEG_UbWX3eZKs6c7E',
  authDomain: 'mybrickapp.firebaseapp.com',
  projectId: 'mybrickapp',
  storageBucket: 'mybrickapp.appspot.com',
  messagingSenderId: '426756007263',
  appId: '1:426756007263:web:a9404cf7b3b515363182ea',
  measurementId: 'G-6F7CS2YX33',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
