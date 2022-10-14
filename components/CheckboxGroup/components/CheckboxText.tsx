import React from "react";

type Props = {
  optionText: OptionText;
  id: string
  
};

const CheckboxText = (props: Props) => {
  return <label htmlFor={props.id} className="capitalize text-sm text-grey-light">{props.optionText}</label>;
};

export default CheckboxText