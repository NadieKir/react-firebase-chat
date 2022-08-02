import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import App from './App';


firebase.initializeApp({
  apiKey: "AIzaSyBIl5lhZfrkJnCkATX0uF3sD2d3GV1MzcI",
  authDomain: "react-firebase-chat-30691.firebaseapp.com",
  projectId: "react-firebase-chat-30691",
  storageBucket: "react-firebase-chat-30691.appspot.com",
  messagingSenderId: "791047640810",
  appId: "1:791047640810:web:d353db5b238d108abf6993",
  measurementId: "G-T73GMEH2SD"
})

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value = {{
      firebase,
      auth, 
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
