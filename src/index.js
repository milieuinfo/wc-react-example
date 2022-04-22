import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "uig-webcomponents/lib/components/content-header";
import "uig-webcomponents/lib/components/typography";
import "uig-webcomponents/lib/components/grid";
import "uig-webcomponents/lib/components/titles";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/form-grid";
import "uig-webcomponents/lib/components/link";
import "uig-webcomponents/lib/components/template";
import "uig-webcomponents/lib/components/header";
import "uig-webcomponents/lib/components/footer";
import "uig-webcomponents/lib/components/body";
import "vl-ui-input-field/dist";
import "vl-ui-input-field/dist/style.css";
import "uig-webcomponents/lib/components/link/styles.css";
import "uig-webcomponents/lib/components/button/styles.css";
import "uig-webcomponents/lib/components/titles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <vl-template>
      <vl-header
        slot="header"
        data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
        data-vl-development
      ></vl-header>
      <div slot="main">
        <App />
      </div>
      <vl-footer
        slot="footer"
        data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
        data-vl-development
      ></vl-footer>
    </vl-template>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
