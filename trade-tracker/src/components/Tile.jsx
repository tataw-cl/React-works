import React from "react";
import Property from "./Property";

function Tile({ name, percentageValue }) {
  return (
    <div className="tile">
      <div className="tile-head">
        <div className="tile-name">{name}</div>
        <div className="tile-value">{percentageValue}%</div>
      </div>

      <div className="tile-body">
        <Property
          label="Today"
          value={`+${(percentageValue * 0.1).toFixed(2)}%`}
        />
        <Property
          label="This Week"
          value={`+${(percentageValue * 0.5).toFixed(2)}%`}
        />
        <Property
          label="This Month"
          value={`+${(percentageValue * 0.8).toFixed(2)}%`}
        />
      </div>
    </div>
  );
}

export default Tile;
