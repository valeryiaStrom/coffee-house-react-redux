import React, { useState, useRef, useEffect } from "react";
const INITIAL_ACTIVE_CONTROL_INDEX = 0;

const Slider = ({ slides }) => {
  const [activeControlIndex, setActiveControlIndex] = useState(
    INITIAL_ACTIVE_CONTROL_INDEX
  );
  const [touch, setTouch] = useState({ startX: null, startY: null });

  const controlsRef = useRef();
  const carouselRef = useRef();

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

  useEffect(() => {
    carouselRef.current.addEventListener("touchstart", handleTouchStart);

    carouselRef.current.addEventListener("touchmove", handleTouchMove);

    carouselRef.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselRef.current.removeEventListener("touchstart", handleTouchStart);

      carouselRef.current.removeEventListener("touchmove", handleTouchMove);

      carouselRef.current.removeEventListener("touchend", handleTouchEnd);
    };
  });

  const handleConrolsAnimationInteractionEnd = (e) => {
    // switch slides to the right
    const next = getNextActiveControlIndex(activeControlIndex, "rtl");
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

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];
    setTouch({ startX: firstTouch.clientX, startY: firstTouch.clientY });
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    // if coords didn't change, then swipe didn't happen
    if (touch.startX === null || touch.startY === null) {
      return;
    }

    const moveX = e.touches[0].clientX;
    const moveY = e.touches[0].clientY;

    // find the difference
    const xDiff = moveX - touch.startX;
    const yDiff = moveY - touch.startY;

    // check what changed more: x coords or y coords
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // swipe right or left
      let next;
      if (xDiff > 0) {
        // swipe right
        next = getNextActiveControlIndex(activeControlIndex, "ltr");
      } else {
        // swipe left
        next = getNextActiveControlIndex(activeControlIndex, "rtl");
      }
      setActiveControlIndex(next);
    }
  };

  const handleTouchEnd = (e) => {
    clearTouches();
  };

  const clearTouches = () => {
    setTouch({ startX: null, startY: null });
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
      <div className='slider__carousel' ref={carouselRef}>
        <span
          className='slider__arrow slider__arrow_left'
          onClick={handleLeftArrowBtnClick}
        >
          <span className='icon slider__arrow-icon slider__arrow-icon_left'></span>
        </span>
        <ul className='slider__slides'>
          {slides.map((slide, i) => {
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
          {slides.map((slide, i) => {
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
