import React from "react";
import PaddingBox from "../PaddingBox";
import StrengthCheckerTitle from "./components/StrengthCheckerTitle";
import StrengthBarsContainer from "./components/StrengthBarsContainer";

type Props = {};

const StrengthChecker = (props: Props) => {
  return (
    <div className="h-sm bg-black">
      <PaddingBox className="flex justify-between items-center h-full">
        <StrengthCheckerTitle />
        <StrengthBarsContainer />
      </PaddingBox>
    </div>
  );
};

export default StrengthChecker;
