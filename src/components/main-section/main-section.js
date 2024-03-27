import React from "react";
import PropTypes from "prop-types";

const MainSection = ({ children }) => {
  return <main>{children}</main>;
};

MainSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainSection;
