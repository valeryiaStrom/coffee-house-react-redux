import { capitalizeFirstLetter } from "./string-helper";

export const getMenuTabsLabels = (categories) => {
  const labels = categories.map((category) => capitalizeFirstLetter(category));
  return labels;
};

export const prepareTabsData = (categories) => {
  const menuTabsLabels = getMenuTabsLabels(categories);
  const menuTabsIconsClassNamesMap = new Map();
  menuTabsIconsClassNamesMap.set("coffee", "icon_menu-tab-coffee");
  menuTabsIconsClassNamesMap.set("tea", "icon_menu-tab-tea");
  menuTabsIconsClassNamesMap.set("dessert", "icon_menu-tab-dessert");

  const output = [];

  categories.forEach((category, i) => {
    output.push({
      category,
      label: menuTabsLabels[i],
      iconClassName: menuTabsIconsClassNamesMap.get(category),
    });
  });

  return output;
};
