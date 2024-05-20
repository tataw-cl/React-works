import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onnClick: () => void;
  //we can set different values that the color parameter can hold by using '|'.
  // e.g we can have color?: 'primary'|'secondary'|'danger'
  color?: string;
}
const Buttons = ({ children, onnClick, color = "primary" }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onnClick}>
        {children}
      </button>
      {/* Implementing the other types of bootstrap buttons
       <button type="button" className="btn btn-secondary">
        {" "}
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        {" "}
        Success
      </button>
      <button type="button" className="btn btn-danger">
        {" "}
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        {" "}
        Warning
      </button>
      <button type="button" className="btn btn-info">
        {" "}
        Info
      </button>
      <button type="button" className="btn btn-light">
        {" "}
        Light
      </button>
      <button type="button" className="btn btn-dark">
        {" "}
        Dark
      </button>
      <button type="button" className="btn btn-link">
        {" "}
        Link
      </button> */}
    </div>
  );
};

export default Buttons;
