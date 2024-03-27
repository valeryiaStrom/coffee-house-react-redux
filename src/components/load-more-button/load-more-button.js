import React from "react";
import PropTypes from "prop-types";

const LoadMoreButton = ({ onButtonClick }) => {
  return (
    <button className='load-more-button' onClick={onButtonClick}>
      <span className='icon icon-load-more'></span>
    </button>
  );
};

LoadMoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
