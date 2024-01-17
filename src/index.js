import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/remote-config";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCY-cJYTiM1bgO5pbLRYD3Od0kS91iC7hM",
  authDomain: "bloomingflower-c5158.firebaseapp.com",
  projectId: "bloomingflower-c5158",
  storageBucket: "bloomingflower-c5158.appspot.com",
  messagingSenderId: "783742504380",
  appId: "1:783742504380:web:164014b8bb3a024ce2efb9",
  measurementId: "G-48B0EKWXB1",
});

export const Context = createContext(null);

const firestore = firebase.firestore();
// const remoteConfig = firebase.remoteConfig();
// remoteConfig.settings.minimumFetchIntervalMillis = 48000;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ firebase, firestore }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
