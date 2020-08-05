import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (typeof window !== "undefined") {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
}
