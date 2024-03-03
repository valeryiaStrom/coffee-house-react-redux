export const capitalizeFirstLetter = (word) => {
    if (!word || typeof word !== 'string') {
      return word;
    }
  
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
    return capitalizedWord;
  };