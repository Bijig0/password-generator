import React, { useState } from "react";
import PaddingBox from "../PaddingBox";
import cn from "classnames";
import AppContext from "../AppContext";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";

type Props = {};

type ColorState = "primary" | "secondary";

const PasswordField = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [copyColor, setCopyColor] = useState<ColorState>("primary");
  const handleHover = () => {
    setCopyColor("secondary");
  };
  const handleUnhover = () => {
    setCopyColor("primary");
  };
  const handleClick = () => {
    navigator.clipboard.writeText(context.password);
    context.setCopied(true);
    setCopyColor("primary");
  };
  return (
    <div className="mb-4 max-w-md h-sm-lg bg-grey-dark">
      <PaddingBox className="flex justify-between items-center h-full">
        <input
          disabled
          placeholder="Password"
          type="text"
          className="outline-none w-full h-full block bg-grey-dark text-grey-light text-md placeholder:text-grey-normal placeholder:text-md"
          value={context.password}
        />
        <dl className="hover:cursor-pointer flex w-28 justify-between items-center">
          <dt
            className={cn({
              "text-coral": true,
              uppercase: true,
              "opacity-0": !context.copied,
              'relative': true,
              'right-[-5px]': true
            })}
          >
            Copied
          </dt>
          <dd>
            <img
              onClick={handleClick}
              className={cn({
                "cursor-pointer": true,
                "w-[50px]": true,
                "h-[25px]": true,
                relative: true,
                "object-[25px]": copyColor === "primary",
                "object-[-25px]": copyColor === "secondary",
                "left-[26px]": copyColor === "secondary",
              })}
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
              src={"/CopyIcon.svg"}
            />
          </dd>
        </dl>
      </PaddingBox>
    </div>
  );
};

export default PasswordField;
