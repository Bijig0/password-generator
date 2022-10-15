import React, { useMemo } from "react";
import retrieveBgColor from "../../../utilities/StrengthChecker/retrieveBgColor";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";
import cn from "classnames";

type Props = {
  position: number;
};

const StrengthBar = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const bgColor = useMemo(() => {
    return retrieveBgColor(context.strength, props.position);
  }, [context.passwordLength, context.numberOfChecked]);

  return (
    <>
      {console.log(bgColor)}
      <div
        className={cn({
          "w-2.5": true,
          "h-7": true,
          "border-2": bgColor === "black",
          "border-solid": bgColor === "black",
          "border-grey-light": bgColor === "black",
          [bgColor]: true,
        })}
      ></div>
      {/* <div className={`w-2.5 h-7 border-2 border-solid border-grey-light ${bgColor}`}></div> */}
    </>
  );
};
export default StrengthBar;
