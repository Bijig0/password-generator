import React, { useState } from "react";
import PaddingBox from "../PaddingBox";
import Image from "next/image";
import cn from "classnames";
import AppContext from "../AppContext";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";

type Props = {};

const PasswordField = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [src, setSrc] = useState("/CopyIconDark.svg");
  const [copied, setCopied] = useState(false);
  const handleHover = () => {
    setSrc("/CopyIconLight.svg");
  };
  const handleUnhover = () => {
    setSrc("/CopyIconDark.svg");
  };
  const handleClick = () => {
    navigator.clipboard.writeText(context.password);
    setCopied(true);
    setSrc("/CopyIconDark.svg");
  };
  return (
    <div className="mb-4 max-w-md h-sm-lg bg-grey-dark">
      <PaddingBox className="flex justify-between items-center h-full">
        <input
          disabled
          placeholder="Password"
          type="text"
          className="text-fill-grey-light outline-none w-full h-full block text-grey-light bg-grey-dark text-md placeholder:text-grey-normal placeholder:text-md"
          value={context.password}
          id='password-input-field'
        />
        <dl className="hover:cursor-pointer flex w-28 justify-between items-center">
          <dt
            className={cn({
              "text-coral": true,
              uppercase: true,
              "opacity-0": !copied,
            })}
          >
            Copied
          </dt>
          <dd>
            <Image
              onClick={handleClick}
              className="cursor-pointer"
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
              src={src}
              width={20}
              height={20}
            />
          </dd>
        </dl>
      </PaddingBox>
    </div>
  );
};

export default PasswordField;
