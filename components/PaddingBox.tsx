import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PaddingBox = (props: Props) => {
  
  const baseClasses = "py-box-y px-box-x";

  return (
    <div className={`${baseClasses} ${props.className}`}>{props.children}</div>
  );
};

export default PaddingBox;
