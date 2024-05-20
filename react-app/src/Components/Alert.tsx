import { ReactNode } from "react";

interface Props {
  //still for first example of passing text
  //   text: string;     //end
  children: ReactNode;
  //We use the ReactNode class to pass html components in our props
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
