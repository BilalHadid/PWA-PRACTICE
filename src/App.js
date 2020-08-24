import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const messsaging = firebase.messaging();
  messsaging
    .requestPermission()
    .then(() => {
      return messsaging.getToken();
    })
    .then((token) => {
      console.log("token", token);
    });
  return (
    <div className="App">
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
