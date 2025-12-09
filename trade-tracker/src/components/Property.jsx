import React, { useState } from "react";

function Property({ label, value }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="property">
      <div className="property-left">
        <label className="property-label">{label}</label>
      </div>

      <div className="property-right">
        <div className={`property-value ${checked ? "on" : "off"}`}>
          {value}
        </div>
        <button
          aria-pressed={checked}
          className={"property-toggle " + (checked ? "on" : "off")}
          onClick={() => setChecked((s) => !s)}
        >
          <svg
            className={`toggle-icon ${checked ? "on" : "off"}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect
              className="toggle-track"
              x="1"
              y="6"
              width="22"
              height="12"
              rx="6"
              fill="transparent"
            />
            <circle
              className="toggle-knob"
              cx={checked ? 17 : 7}
              cy="12"
              r="3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Property;
