import React from "react";
import Caption from "./components/Caption";
import MySliderComponent from './components/SliderComponent'

type Props = {};

const MySlider = (props: Props) => {
  return (
    <div>
          <Caption />
          <MySliderComponent/>
    </div>
  );
};

export default MySlider;
