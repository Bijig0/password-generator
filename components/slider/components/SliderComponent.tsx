import React, { useEffect, useRef } from "react";
import numifyStyles from "../../../utilities/numifyStyles";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";

type Props = {};

const SliderComponent = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  // Fix the typing issues, and the fixed magic numbers
  const slider = useRef(null) as any;
  const circle = useRef(null) as any;
  let initialMouseX: number;

  // How can I access the width of slider dynamically??
  const initialSliderWidth = 400;
  let sliderWidth: number;
  let offset: number = -1;

  const handleMouseMove = (mouseMoveEvent: any) => {
    const movedMouseX: number = mouseMoveEvent.clientX;

    let distanceMouseMovedX: number = -(movedMouseX - initialMouseX);

    const numifiedSliderWidth: number = sliderWidth;

    console.log(numifiedSliderWidth);

    const newWidth: number = numifiedSliderWidth - distanceMouseMovedX;

    if (newWidth > initialSliderWidth) {
      return;
    } else if (newWidth < 10) {
      return;
    }

    const newLength = Math.round((newWidth / initialSliderWidth) * 10);

    context.setPasswordLength(newLength !== 0 ? newLength : 1);

    slider.current.style.width = `${String(newWidth)}px`;
    circle.current.style.right = `${String(distanceMouseMovedX + offset)}px`;
  };
  const handleMouseDown = (mouseDownEvent: React.MouseEvent) => {
    mouseDownEvent.preventDefault();
    initialMouseX = mouseDownEvent.clientX;
    sliderWidth = numifyStyles(window.getComputedStyle(slider.current).width);
    offset = numifyStyles(circle.current.style.right);
    circle.current.classList.remove("bg-grey-light");
    circle.current.classList.add(
      "bg-grey-dark",
      "border-solid",
      "border-coral",
      "border-2"
    );

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "mouseup",
      function handleMouseUp() {
        window.removeEventListener("mousemove", handleMouseMove);
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
      <div ref={slider} className="block h-[10px] bg-coral w-full h-full absolute"></div>
      <div ref={circle} onMouseDown={handleMouseDown} className="absolute appearance-none bg-grey-light rounded-full w-[28px] h-[28px] inline-block align-middle -right-1 -translate-y-[9px]"></div>
    </div>
  );
};

export default SliderComponent;
