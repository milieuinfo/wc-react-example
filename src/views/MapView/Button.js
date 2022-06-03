import React from "react";

const Button = ({ children, rest, onClick }) => (
  <button onClick={onClick} {...rest} is="vl-button">
    {children}
  </button>
);

export default Button;
