import React from "react";

const Wrapper = ({ children, cn }) => {
  return <div className={cn ? `wrapper ${cn}` : "wrapper"}>{children}</div>;
};

export default Wrapper;
