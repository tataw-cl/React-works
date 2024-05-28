import React from "react";

export const Transactions = ({ transaction, cost }) => {
  return (
    <div>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>$-400</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </div>
  );
};
