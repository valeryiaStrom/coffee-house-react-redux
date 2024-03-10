import React from "react";

const Tabs = ({ cn, onTabClick, children }) => {
  return (
    <div className={`tabs ${cn}`} onClick={onTabClick}>
      {children}
    </div>
  );
};

export default Tabs;
