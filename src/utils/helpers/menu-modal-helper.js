export const getDataItemById = (data, id) => {
  return data.find(({ id: itemId }) => itemId === id);
};

const prepareSizeData = (data) => {
  const { sizes } = data;
  const entries = Object.entries(sizes);
  const preparedSizes = entries.map(([sizeLabel, sizeData]) => {
    const labelUpperCased = sizeLabel.toUpperCase();
    sizeData = {
      ...sizeData,
      label: labelUpperCased,
    };
    return sizeData;
  });
  return preparedSizes;
};

export const prepareProductData = (data) => {
  const { sizes, ...rest } = data;
  const preparedSizeData = prepareSizeData(data);
  const preparedProductData = {
    sizes: preparedSizeData,
    ...rest,
  };
  return preparedProductData;
};
