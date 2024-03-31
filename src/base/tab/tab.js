import React from "react";
import PropTypes from "prop-types";

const Tab = ({ id, isActive = false, tabText, iconCn, iconText, onClick }) => {
  const tabClassName = isActive ? "tab tab_active" : "tab";
  const tabIconClassName = iconCn ? `icon ${iconCn}` : "icon";
  const tabIconText = iconText ? iconText : "";

  console.log("EACH TAB RE RENDER");

  return (
    <div className={tabClassName} data-id={id} onClick={onClick}>
      <span className='tab__icon'>
        <span className={tabIconClassName}>{tabIconText}</span>
      </span>
      <span className='tab__text'>{tabText}</span>
    </div>
  );
};

Tab.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  isActive: PropTypes.bool.isRequired,
  tabText: PropTypes.string.isRequired,
  iconCn: PropTypes.string,
  iconText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.string,
};

export default Tab;
