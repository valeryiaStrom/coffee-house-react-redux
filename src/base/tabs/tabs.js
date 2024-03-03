import React from "react";

const Tabs = ({ cn, children }) => {
  return <div className={`tabs ${cn}`}>{children}</div>;
};

export default Tabs;
