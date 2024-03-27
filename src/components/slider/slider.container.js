import React from "react";
import { connect } from "react-redux";
import Slider from "./slider.component";
import { selectGetSlides } from "../../pages/slider.selector";

const SliderContainer = ({ slides }) => {
  return <Slider slides={slides} />;
};

const mapStateToProps = (state) => {
  return {
    slides: selectGetSlides(state),
  };
};

export default connect(mapStateToProps)(SliderContainer);
