import React from "react";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";

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
