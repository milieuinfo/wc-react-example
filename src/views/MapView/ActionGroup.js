import React from "react";
import "uig-webcomponents/lib/components/action-group";
import "uig-webcomponents/lib/components/action-group/styles.css";

const ActionGroup = ({ children }) => (
  <div is="vl-action-group">{children}</div>
);

export default ActionGroup;
