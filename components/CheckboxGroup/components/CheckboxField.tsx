import React from "react";
import Option from "../../../utilities/Option";
import Checkbox from "./Checkbox";
import CheckboxText from "./CheckboxText";

type Props = {
  passwordOption: Option;
  id: string;
};

const CheckboxField = (props: Props) => {
  return (
    <li className="flex items-center bg-grey-dark">
      <Checkbox passwordOption={props.passwordOption} id={props.id} />
      <CheckboxText optionText={props.passwordOption.text} id={props.id} />
    </li>
  );
};

export default CheckboxField;
