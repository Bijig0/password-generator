import React, {useState} from "react";
import AppContext from "../AppContext";
import useNotUndefinedContext from '../../utilities/useNotUndefinedContext'

type Props = {};

const Button = (props: Props) => {
  const context = useNotUndefinedContext(AppContext);
  const [touched, setTouched] = useState(false);
  
  return (
    <button
      onClick={context.handleGeneratePassword}
      className="ease-in-out duration-75 text-grey-dark active:text-coral active:border-solid active:bg-grey-dark active:border-4 active:border-coral hover:text-coral hover:border-solid hover:border-4 hover:border-coral hover:bg-grey-dark bg-coral h-button-y text-md"
    >
      <p>Generate Password</p>
      {/* Add an arrow svg here */}
    </button>
  );
};

export default Button;
