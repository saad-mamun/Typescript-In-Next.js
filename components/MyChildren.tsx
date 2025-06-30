import React, { ReactNode } from "react";

type UserShape = { children: ReactNode };

const MyChildren = ({ children }: UserShape) => {
  return <div>{children}</div>;
};

export default MyChildren;
