import React from "react";

const Tab = ({ dataId, isActive = false, tabText, iconCn, iconText }) => {
  const tabClassName = isActive ? 'tab tab_active' : 'tab';
  const tabIconClassName = iconCn ? `icon ${iconCn}` : 'icon';
  const tabIconText = iconText ? iconText : '';

  return (
    <div className={tabClassName} data-id={dataId}>
      <span className='tab__icon'>
        <span className={tabIconClassName}>{tabIconText}</span>
      </span>
      <span className='tab__text'>{tabText}</span>
    </div>
  );
};

export default Tab;
