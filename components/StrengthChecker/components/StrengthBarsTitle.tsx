import React from "react";
import useNotUndefinedContext from "../../../utilities/useNotUndefinedContext";
import AppContext from "../../AppContext";

type Props = {
};

const StrengthBarsTitle = (props: Props) => {
  const context = useNotUndefinedContext(AppContext)
    return (
      <dt>
        <em className="text-grey-light text-md uppercase not-italic">
          {context.strength}
        </em>
      </dt>
    );
};

export default StrengthBarsTitle
