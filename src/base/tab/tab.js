import React from "react";

const Tab = ({
  id,
  isActive = false,
  tabText,
  iconCn,
  iconText,
  onClick,
}) => {
  const tabClassName = isActive ? "tab tab_active" : "tab";
  const tabIconClassName = iconCn ? `icon ${iconCn}` : "icon";
  const tabIconText = iconText ? iconText : "";

  return (
    <div className={tabClassName} data-id={id} onClick={onClick}>
      <span className='tab__icon'>
        <span className={tabIconClassName}>{tabIconText}</span>
      </span>
      <span className='tab__text'>{tabText}</span>
    </div>
  );
};

export default Tab;
