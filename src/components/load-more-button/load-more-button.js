import React from "react";

const LoadMoreButton = ({ onButtonClick}) => {
  return (
    <button className='load-more-button' onClick={onButtonClick}>
      <span className='icon icon-load-more'></span>
    </button>
  );
};

export default LoadMoreButton
