import { useState, useEffect } from "react";
import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { Spend } from "./components/spend";
import { Transactions } from "./components/transactList";
import { New } from "./components/Add_trans";
const App = () => {
    const [transactions, setTransactions] = useState([]);
    const handleAddTransaction = (text, amount) => {
        setTransactions([{ text, amount }]);
    };
    return ( <
        div className = "App" >
        <
        Header title = "Expense Tracker" > < /Header> <Balance bal={200} / >
        <
        Spend income = { 500 }
        expense = { 200 } > { " " } <
        /Spend>{" "} <
        h2 > HISTORY < /h2>{" "} <
        Transactions transaction = {} > < /Transactions>{" "} { /* <Transactions transaction="Book" cost={300} /> */ }; { " " } <
        New onAddTransaction = { handleAddTransaction }
        />{" "} <
        /div>
    );
};

export default App;