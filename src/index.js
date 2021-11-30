import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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
  document.getElementById("app")
);
