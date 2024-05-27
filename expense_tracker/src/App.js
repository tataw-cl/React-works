import { useState, useEffect } from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
const App = () => {
  return (
    <div className="App">
      <Header title="Expense Tracker"> </Header> <Balance />
    </div>
  );
};

export default App;
