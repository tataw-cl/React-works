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
          className={`property-toggle ${checked ? "on" : "off"}`}
          onClick={() => setChecked((s) => !s)}
          title={checked ? "On" : "Off"}
        >
          {/* track */}
          <span className="toggle-track-el" aria-hidden>
            {/* knob */}
            <span className={`toggle-knob-el ${checked ? "on" : "off"}`} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Property;
