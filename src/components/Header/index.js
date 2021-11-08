import React from "react";
import "uig-webcomponents/lib/components/content-header";
import { srcSet } from "./srcSet";

const Header = () => (
  <vl-content-header>
    <img
      alt=""
      is="vl-image"
      slot="image"
      sizes="100vw"
      src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      srcset={srcSet}
    />
    <a slot="context-link" href="/">
      React
    </a>
    <a slot="title-link" href="/">
      Example
    </a>
  </vl-content-header>
);

export default Header;
