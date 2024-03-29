import React from "react";
import { connect } from "react-redux";
import Slider from "./slider.component";
import { selectIsLoading, selectGetSlides } from "../../pages/slider.selector";
import { getSlides } from "../../store/slider/slider.actions";

const SliderContainer = ({ isLoading, slides, getSlides }) => {
  return <Slider slides={slides} isLoading={isLoading} onGetSlides={getSlides}/>;
};

const mapStateToProps = (state) => {
  return {
    isLoading: selectIsLoading(state),
    slides: selectGetSlides(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSlides: () => dispatch(getSlides()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
