import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "uig-webcomponents/lib/components/body/styles.css";
import "uig-webcomponents/lib/components/grid";
import "uig-webcomponents/lib/components/titles";
import "uig-webcomponents/lib/components/titles/styles.css";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/button/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
