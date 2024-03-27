import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children, cn }) => {
  return <div className={cn ? `wrapper ${cn}` : "wrapper"}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  cn: PropTypes.string,
};

export default Wrapper;
