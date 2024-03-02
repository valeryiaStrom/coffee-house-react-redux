import React from "react";

const LinkButton = ({ cn, href, target, children }) => {
  return (
    <a className={`link-button ${cn}`} href={href} target={target}>
      {children}
    </a>
  );
};

export default LinkButton;
