import React, {useState } from "react";
import cn from "classnames";
import OptionClass from "../../../utilities/Option";
import AppContext from "../../AppContext";
import useNotUndefinedContext from '../../../utilities/useNotUndefinedContext'

type Props = {
  passwordOption: OptionClass;
  id: string
};

const Checkbox = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const context = useNotUndefinedContext(AppContext)

  const handleClick = () => {
    setChecked((prevChecked) => !prevChecked);
    if (checked) {
      context.setNumberOfChecked((prevNum) => prevNum - 1);
    } else if (!checked) {
      context.setNumberOfChecked((prevNum) => prevNum + 1);
    }
    context.setPasswordOptions((passwordOptions) => {
      const passwordOptionsCopy = passwordOptions.map((passwordOption) => {
        if (passwordOption.text === props.passwordOption.text) {
          // Make this create new OptionClass object instead
          return { ...passwordOption, checked: !passwordOption.checked };
        }
        return passwordOption;
      });

      return passwordOptionsCopy;
    });
  };
  return (
    <>
      <input
        type='checkbox'
        id={props.id}
        onClick={handleClick}
        className={cn({
          'appearance-none': true,
          relative: true,
          "aspect-square": true,
          "w-checkbox": true,
          "mr-5": true,
          "bg-grey-dark": !checked,
          "border-2": !checked,
          "border-solid": !checked,
          "border-grey-light": !checked,
          "bg-coral": checked,
          "border-0": checked,
          "before:absolute": checked,
          "before:w-tick": checked,
          "before:bg-tick": checked,
          "before:aspect-square": checked,
          "before:absolute-center": checked,
        })}
      ></input>
    </>
  );
};

export default Checkbox;
