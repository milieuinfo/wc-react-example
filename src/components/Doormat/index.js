import React from "react";
import { Link } from "react-router-dom";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";

const Doormat = ({ href, title }) => {
  return (
    <div is="vl-column">
      <Link is="vl-doormat" to={href}>
        <h2 is="vl-doormat-title">{title}</h2>
      </Link>
    </div>
  );
};

export default Doormat;
