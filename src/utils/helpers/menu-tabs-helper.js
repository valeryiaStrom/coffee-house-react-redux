import { capitalizeFirstLetter } from "./string-helper";

export const getMenuCategories = (products) => {
  const categories = products.map(({ category }) => category);
  const uniqueCategories = Array.from(new Set(categories));
  return uniqueCategories;
};

export const getMenuTabsLabels = (categories) => {
  const labels = categories.map((category) => capitalizeFirstLetter(category));
  return labels;
};

export const prepareTabsData = (products) => {
  const menuCategories = getMenuCategories(products);
  const menuTabsLabels = getMenuTabsLabels(menuCategories);
  const menuTabsIconsClassNamesMap = new Map();
  menuTabsIconsClassNamesMap.set("coffee", "icon_menu-tab-coffee");
  menuTabsIconsClassNamesMap.set("tea", "icon_menu-tab-tea");
  menuTabsIconsClassNamesMap.set("dessert", "icon_menu-tab-dessert");

  const output = [];

  menuCategories.forEach((category, i) => {
    output.push({
      category,
      label: menuTabsLabels[i],
      iconClassName: menuTabsIconsClassNamesMap.get(category),
    });
  });

  return output;
};
