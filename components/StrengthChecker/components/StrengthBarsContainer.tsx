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
      className={`w-full grid grid-cols-2 max-w-48 items-center ${
        context.strength === "none" ? "grid-cols-1 justify-items-end" : ""
      } `}
    >
      <StrengthBarsTitle />
      <StrengthBars />
    </dl>
  );
};

export default StrengthBarsContainer;
