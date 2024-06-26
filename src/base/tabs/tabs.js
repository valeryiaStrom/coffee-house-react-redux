import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ cn, onTabClick, children }) => {
  return (
    <div className={`tabs ${cn}`} onClick={onTabClick}>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  cn: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default React.memo(Tabs);
