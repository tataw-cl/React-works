import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Buttons = ({ children }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary">
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
