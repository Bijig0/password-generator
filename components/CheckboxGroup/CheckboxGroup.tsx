import React from "react";
import CheckboxField from "./components/CheckboxField";
import useNotUndefinedContext from "../../utilities/useNotUndefinedContext";
import AppContext from '../AppContext'


type Props = {
};

const CheckboxGroup = (props: Props) => {
  const context = useNotUndefinedContext(AppContext)
  return (
    <form>
      <ul className="flex flex-col gap-y-4 my-6">
        {context.passwordOptions.map((passwordOption) => (
          <CheckboxField
            key={passwordOption.id}
            passwordOption={passwordOption}
            id={String(passwordOption.id)}
          />
        ))}
      </ul>
    </form>
  );
};

export default CheckboxGroup;
