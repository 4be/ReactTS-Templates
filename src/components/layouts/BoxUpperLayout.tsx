import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BoxUpperLayout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default BoxUpperLayout;
