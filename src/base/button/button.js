import React from "react";

const LinkButton = ({cn, href, text}) => {
  return (
    <a href={href} className={`link-button ${cn}`}>
      <span className="buttton-text">{text}</span>
      <span className="icon icon_coffee"></span>
    </a>
  );
};

export default LinkButton;
