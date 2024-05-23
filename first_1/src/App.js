import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((prCount) => prCount + 1);
        }}
      >
        {" "}
        +{" "}
      </button>{" "}
      <h1> {count} </h1>{" "}
      <button
        onClick={() => {
          setCount((ncount) => ncount - 1);
        }}
      >
        {" "}
        -{" "}
      </button>{" "}
    </div>
  );
};

export default App;
