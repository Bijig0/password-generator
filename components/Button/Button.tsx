import React from "react";
import AppContext from "../AppContext";
import useNotUndefinedContext from '../../utilities/useNotUndefinedContext'

type Props = {};

const Button = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  return (
    <button
      onClick={context.handleGeneratePassword}
      className="ease-in-out duration-300 text-grey-dark hover:text-coral hover:border-solid hover:border-4 hover:border-coral hover:bg-grey-dark bg-coral h-button-y text-md"
    >
      <p>Generate Password</p>
      {/* Add an arrow svg here */}
    </button>
  );
};

export default Button;
