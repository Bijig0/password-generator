import React from "react";
import AppContext from '../../AppContext'
import useNotUndefinedContext from '../../../utilities/useNotUndefinedContext'

type Props = {
};

const Caption = (props: Props) => {
    const context = useNotUndefinedContext(AppContext)
    return (
      <dl className="flex justify-between items-center">
        <dt className="text-grey-light text-sm">Character Length</dt>
        <dd>
          <data className="text-coral text-lg">{context.passwordLength }</data>
        </dd>
      </dl>
    );
};

export default Caption