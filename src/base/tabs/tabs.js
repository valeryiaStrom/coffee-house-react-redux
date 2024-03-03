import React from "react";
import { prepareTabsData } from "../../utils/helpers/menu-tabs-helper";
import Tab from "../tab/tab";

const Tabs = ({ cn, data, selectedTab, onTabClick }) => {
  const tabsData = prepareTabsData(data);
  const tabs = [];
  tabsData.forEach((tab, i) => {
    tabs.push(
      <Tab
        key={i}
        category={tab.category}
        isActive={selectedTab === tab.category}
        tabText={tab.label}
        iconCn={tab.iconClassName}
        onClick={(e) => {
          onTabClick(e.target.closest(".tab").getAttribute("data-id"));
        }}
      />
    );
  });

  return <div className={`tabs ${cn}`}>{tabs}</div>;
};

export default Tabs;
