import React from "react";
import "./App.css";

function App(props) {
  return (
    <div onClick={props.onClick}>
      This div has been clicked {props.clicks} times.
    </div>
  );
}

export default App;
