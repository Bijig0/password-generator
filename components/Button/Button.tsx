import React, { useState } from "react";
import AppContext from "../AppContext";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";
import cn from "classnames";

type Props = {};

const Button = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [down, setDown] = useState(false);

  function handleMouseOver(e: React.MouseEvent) {
    // mouseOver implicitly gets fired on click for a touch device
    if (e.relatedTarget === null) {
      return;
    }
    console.log("Mouse over");
    setDown(!down);
  }

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseLeave={() => setDown(!down)}
      onTouchStart={() => setDown(!down)}
      onTouchEnd={() => setDown(!down)}
      onClick={context.handleGeneratePassword}
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
