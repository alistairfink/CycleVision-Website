import React from "react";
import ReactDOM from "react-dom";
import "./Styling/index.css";
import App from "./Pages/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
