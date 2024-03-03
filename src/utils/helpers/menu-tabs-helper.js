import { capitalizeFirstLetter } from './string-helper';

export const getMenuCategories = (products) => {
    const categories = products.map(({category}) => category);
    const uniqueCategories = Array.from(new Set(categories));
    return uniqueCategories;
}

export const getMenuTabsLabels = (categories) => {
    const labels = categories.map((category) => capitalizeFirstLetter(category));
    return labels;
}