import React, { useEffect, useRef, useState } from "react";
import numifyStyles from "../../../utilities/numifyStyles";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";
import {
  isDOMMouseEvent,
  isReactMouseEvent,
} from "../../../utilities/isMouseEvent";

type Props = {};

let didInit = false;
const SliderComponent = (props: Props) => {
  const [, render] = useState({});

  const context = useNotUndefinedContext(AppContext);
  // Fix the typing issues, and the fixed magic numbers
  const slider = useRef(null) as any;
  const circle = useRef(null) as any;
  let initialCircleX: number;

  // How can I access the width of slider dynamically??
  const initialSliderWidth = useRef(0);

  useEffect(() => {
    initialSliderWidth.current = numifyStyles(
      window.getComputedStyle(slider.current).width
    );
  }, []);
  let sliderWidth: number;
  let offset: number = -1;

  const handleCircleMove = (e: MouseEvent | TouchEvent) => {
    const movedCircleX: number = isDOMMouseEvent(e)
      ? e.clientX
      : e.touches[0].clientX;

    let distanceMouseMovedX: number = -(movedCircleX - initialCircleX);

    const numifiedSliderWidth: number = sliderWidth;

    console.log(numifiedSliderWidth);

    const newWidth: number = numifiedSliderWidth - distanceMouseMovedX;

    if (newWidth > initialSliderWidth.current) {
      return;
    } else if (newWidth < 10) {
      return;
    }

    const newLength = Math.round((newWidth / initialSliderWidth.current) * 10);

    context.setPasswordLength(newLength !== 0 ? newLength : 1);

    slider.current.style.width = `${newWidth}px`;
    circle.current.style.right = `${distanceMouseMovedX + offset}px`;
  };
  const handleCirclePress = (e: React.MouseEvent | React.TouchEvent) => {
    if (!didInit) {
      didInit = true;
      render({});
    }
    isReactMouseEvent(e) ? e.preventDefault() : null;
    console.log(e);

    initialCircleX = isReactMouseEvent(e) ? e.clientX : e.touches[0].clientX;

    sliderWidth = numifyStyles(window.getComputedStyle(slider.current).width);
    offset = numifyStyles(circle.current.style.right);
    circle.current.classList.remove("bg-grey-light");
    circle.current.classList.add(
      "bg-grey-dark",
      "border-solid",
      "border-coral",
      "border-2"
    );

    window.addEventListener(
      isReactMouseEvent(e) ? "mousemove" : "touchmove",
      handleCircleMove
    );
    window.addEventListener(
      isReactMouseEvent(e) ? "mouseup" : "touchend",
      function handleMouseUp() {
        window.removeEventListener(
          isReactMouseEvent(e) ? "mousemove" : "touchmove",
          handleCircleMove
        );
        circle.current.classList.remove(
          "bg-grey-dark",
          "border-solid",
          "border-coral",
          "border-2"
        );
        circle.current.classList.add("bg-grey-light");
      },
      { once: true }
    );
  };
  return (
    <div className="block h-[10px] bg-black mt-[32px] relative">
      <div
        ref={slider}
        className="block h-[10px] bg-coral w-full h-full absolute"
      ></div>
      <div
        ref={circle}
        onMouseDown={handleCirclePress}
        onTouchStart={handleCirclePress}
        className="absolute appearance-none bg-grey-light rounded-full w-[28px] h-[28px] inline-block align-middle -right-1 -translate-y-[9px]"
      ></div>
    </div>
  );
};

export default SliderComponent;
