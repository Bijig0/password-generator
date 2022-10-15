import React, { useState } from "react";
import AppContext from "../AppContext";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";
import cn from "classnames";

type Props = {};

const Button = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [down, setDown] = useState(false);

  return (
    <button
      onMouseOver={() => setDown(!down)}
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
