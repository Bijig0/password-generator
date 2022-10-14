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
      className={`flex w-48 items-center ${
        context.strength === "non-existent" ? "justify-end" : "justify-between"
      } `}
    >
      <StrengthBarsTitle />
      <StrengthBars />
    </dl>
  );
};

export default StrengthBarsContainer;
