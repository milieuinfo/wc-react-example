import React from "react";
import "vl-ui-doormat";
import "vl-ui-doormat/dist/style.css";

const Doormat = ({ href, title }) => {
  return (
    <div is="vl-column">
      <a is="vl-doormat" href={href}>
        <h2 is="vl-doormat-title">{title}</h2>
      </a>
    </div>
  );
};

export default Doormat;
