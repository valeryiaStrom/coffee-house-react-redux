export const getDataItemById = (data, id) => {
  return data.find(({ id: itemId }) => itemId === id);
};

const prepareSizeData = (data) => {
  const { sizes } = data;
  const entries = Object.entries(sizes);
  const preparedSizes = entries.map(([sizeLabel, sizeData], i) => {
    const labelUpperCased = sizeLabel.toUpperCase();
    sizeData = {
      id: i,
      ...sizeData,
      label: labelUpperCased,
    };
    return sizeData;
  });
  return preparedSizes;
};

const prepareAdditivesData = (data) => {
  const { additives } = data;
  const preparedAdditives = additives.map((additive, i) => {
    const addtitiveData = { id: i, ...additive };
    return addtitiveData;
  });
  return preparedAdditives;
};

export const prepareProductData = (data) => {
  const { sizes, additives, ...rest } = data;
  const preparedSizeData = prepareSizeData(data);
  const preparedAdditivesData = prepareAdditivesData(data);
  const preparedProductData = {
    sizes: preparedSizeData,
    additives: preparedAdditivesData,
    ...rest,
  };
  return preparedProductData;
};
