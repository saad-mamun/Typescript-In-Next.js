
import { FC, ReactNode } from "react";

interface ElementWrapperProps {
  elementType: "div" | "span" | "h1" | "button";
  children: ReactNode;
  classname?: string;
  onClick?: () => void;
}

const ElementWrapper: FC<ElementWrapperProps> = ({
  elementType,
  children,
  classname,
  onClick,
}) => {

 const Element = elementType as keyof JSX.IntrinsicElements


  return <Element classname={classname} onClick={onClick} >
    {children}
  </Element>;
};

export default ElementWrapper;
