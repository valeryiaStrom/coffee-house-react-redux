import React from "react";

const LinkButton = ({ cn, href, target, innerHtml }) => {
  return (
    <a href={href} className={`link-button ${cn}`} target={target}>
      {innerHtml}
    </a>
  );
};

export default LinkButton;
