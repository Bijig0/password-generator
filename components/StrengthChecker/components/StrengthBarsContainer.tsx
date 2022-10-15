import React from "react";
import StrengthBars from "./StrengthBars";
import StrengthBarsTitle from "./StrengthBarsTitle";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";

type Props = {};

const StrengthBarsContainer = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);

  return (
    <dl
      className={`grow shrink-0 flex justify-end items-center`}
    >
      <StrengthBarsTitle />
      <StrengthBars />
    </dl>
  );
};

export default StrengthBarsContainer;
