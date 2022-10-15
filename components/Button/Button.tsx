import React, { useState } from "react";
import AppContext from "../AppContext";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";
import cn from "classnames";
import isMobile from '../../utilities/isMobile'

type Props = {};

const Button = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [down, setDown] = useState(false);
  function handleMouseOver(e: React.MouseEvent) {
    if (isMobile()) return false
    console.log("Mouse over");
    setDown(!down);
  }
  function handleMouseLeave(e: React.MouseEvent) {
    // mouse over and mouse leave implictly fires during an onClick on touch devices
    if (isMobile()) return false
    console.log('Mouse leave')
    setDown(!down)

  }

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => setDown(!down)}
      onTouchEnd={() => setDown(!down)}
      // onClick={context.handleGeneratePassword}
      className={cn({
        "bg-coral": !down,
        "text-grey-dark": !down,
        "ease-in-out": true,
        "duration-75": true,
        "h-button-y": true,
        "text-md": true,
        "text-coral": down,
        "bg-grey-dark": down,
        "border-coral": down,
        "border-4": down,
        "border-solid": down,
      })}
    >
      Generate Password
    </button>
  );
};

export default Button;
