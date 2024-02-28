import React from "react";

const Wrapper = ({ children, cn }) => {
  return <div className={`wrapper ${cn}`}>{children}</div>;
};

export default Wrapper;
