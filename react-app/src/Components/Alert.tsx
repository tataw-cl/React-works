import { ReactNode } from "react";

interface Props {
  //still for first example of passing text
  //   text: string;     //end
  children: ReactNode;
  //We use the ReactNode class to pass html components in our props
  onClose?: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
