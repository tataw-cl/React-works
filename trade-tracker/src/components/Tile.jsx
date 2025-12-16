import React from "react";
import Property from "./Property";

function Tile({ name, percentageValue, properties = [], children }) {
  // default properties to keep backward compatibility
  const defaultProperties = [
    { label: "Trend", value: "+10%" },
    { label: "At AOI/Rejected", value: "+10%" },
    { label: "Touching EMA", value: "+5%" },
    { label: "Round Psychological Level", value: "+5%" },
    { label: "Rejection From Previous Structure", value: "+10%" },
    { label: "Candlestick Rejection From AOI", value: "+10%" },
    { label: "Break & Retest/Head & Shoulders Pattern", value: "+10%" },
  ];

  const propsToRender =
    properties && properties.length ? properties : defaultProperties;

  return (
    <div className="tile">
      <div className="tile-head">
        <div className="tile-name">{name}</div>
        <div className="tile-value">{percentageValue}%</div>
      </div>

      <div className="tile-body">
        {propsToRender.map((p, i) => (
          <Property key={i} label={p.label} value={p.value} />
        ))}

        {/* allow consumers to pass additional custom children if needed */}
        {children}
      </div>
    </div>
  );
}

export default Tile;
