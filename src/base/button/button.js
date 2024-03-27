import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ cn, href, target, children }) => {
  return (
    <a className={`link-button ${cn}`} href={href} target={target}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  cn: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default LinkButton;
