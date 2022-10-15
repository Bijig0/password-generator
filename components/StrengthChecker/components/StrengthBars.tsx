import React from "react";
import StrengthBar from "./StrengthBar";
import range from "../../../utilities/range";

type Props = {};

const StrengthBars = (props: Props) => {
  const numberOfBars = 4;
  const arrayofNumberOfBars = range(1, numberOfBars);
  return (
    <dd className="flex gap-x-1 justify-center">
      {arrayofNumberOfBars.map((num) => {
        return <StrengthBar key={num} position={num} />;
      })}
    </dd>
  );
};

export default StrengthBars;
