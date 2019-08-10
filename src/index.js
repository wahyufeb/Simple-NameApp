import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// counter App
import App from "./App";

// Todo List App
import NameApp from "./Todo/NameApp";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("counter"));
ReactDOM.render(<NameApp />, document.getElementById("todo"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
