import React, { useMemo } from "react";
import retrieveBgColor from "../../../utilities/StrengthChecker/retrieveBgColor";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";

type Props = {
  position: number;
};

const StrengthBar = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const bgColor = useMemo(() => {
    return retrieveBgColor(context.strength, props.position);
  }, [context.passwordLength, context.numberOfChecked]);

  // const bgColor = 'hidden'
  // const bgColor = 'bg-strong'
  // const bgColor = 'bg-moderate'
  // const bgColor = 'bg-weak'
  // const bgColor = 'bg-too-weak'

  return (
    <>
      <div className={`w-2.5 h-7 ${bgColor}`}></div>
    </>
  );
};
export default StrengthBar;
