import React from "react";

export const Transactions = ({ transactions }) => {
  return (
    <>
      <div id="list" className="list">
        {transactions.map((text, index) => (
          <div key={index}>
            {text.text} <span className="price">$-{text.amount}</span>
            <button className="delete-btn">X</button>
          </div>
        ))}
      </div>
    </>
  );
};
