import React, { useState, useRef, useEffect } from "react";
const INITIAL_ACTIVE_CONTROL_INDEX = 0;

const Slider = ({ data }) => {
  const [activeControlIndex, setActiveControlIndex] = useState(
    INITIAL_ACTIVE_CONTROL_INDEX
  );
  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current.addEventListener(
      "animationiteration",
      handleConrolsAnimationInteractionEnd
    );

    return () => {
      controlsRef.current.removeEventListener(
        "animationiteration",
        handleConrolsAnimationInteractionEnd
      );
    };
  });

  const handleConrolsAnimationInteractionEnd = (e) => {
    // switch slides to the right
    const next = getNextActiveControlIndex(activeControlIndex, "rtl");
    console.log("next active control index after autoplay: " + next);
    setActiveControlIndex(next);
  };

  const handleLeftArrowBtnClick = (e) => {
    console.log("left");
    const next = getNextActiveControlIndex(activeControlIndex, "ltr");
    console.log("next active control index: " + next);
    setActiveControlIndex(next);
  };

  const handleRightArrowBtnClick = (e) => {
    console.log("right");
    const next = getNextActiveControlIndex(activeControlIndex, "rtl");
    console.log("next active control index: " + next);
    setActiveControlIndex(next);
  };

  const getNextActiveControlIndex = (currentActiveControlIndex, direction) => {
    let nextActiveControlIndex;
    if (direction === "ltr") {
      if (currentActiveControlIndex === 0) {
        nextActiveControlIndex = controlsRef.current.children.length - 1;
      } else {
        nextActiveControlIndex = --currentActiveControlIndex;
      }
    } else {
      if (currentActiveControlIndex < controlsRef.current.children.length - 1) {
        nextActiveControlIndex = ++currentActiveControlIndex;
      } else {
        nextActiveControlIndex = 0;
      }
    }

    return nextActiveControlIndex;
  };

  return (
    <div className='slider'>
      <div className='slider__carousel'>
        <span
          className='slider__arrow slider__arrow_left'
          onClick={handleLeftArrowBtnClick}
        >
          <span className='icon slider__arrow-icon slider__arrow-icon_left'></span>
        </span>
        <ul className='slider__slides'>
          {data.map((slide, i) => {
            return (
              <li
                key={slide.id}
                className={
                  i === activeControlIndex ? "slide slide_active" : "slide"
                }
                style={{
                  transform: `translateX(-${activeControlIndex * 100}%)`,
                }}
              >
                <div className='slide__content'>
                  <img
                    src={slide.imageSrc}
                    alt={slide.title}
                    className='slide__image'
                  />
                  <div className='slide__text'>
                    <h3 className='slide__title'>{slide.title}</h3>
                    <p className='slide__description'>{slide.description}</p>
                    <h3 className='slide__price'>{slide.price}</h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <span
          className='slider__arrow slider__arrow_right'
          onClick={handleRightArrowBtnClick}
        >
          <span className='icon slider__arrow-icon slider__arrow-icon_right'></span>
        </span>
      </div>
      <div className='slider__controls'>
        <div className='controls' ref={controlsRef}>
          {data.map((slide, i) => {
            return (
              <span
                key={slide.id}
                data-id={slide.id}
                className={
                  i === activeControlIndex
                    ? "control control_active"
                    : "control"
                }
              >
                <span className='control__inner'></span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
