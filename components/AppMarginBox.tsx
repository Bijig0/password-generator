import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PhoneMarginBox = (props: Props) => {
  const baseClasses = "mx-[16px] my-[64px]";

  return (
    <div className={`${baseClasses} ${props.className}`}>{props.children}</div>
  );
};

export default PhoneMarginBox;
