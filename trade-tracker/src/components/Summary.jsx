import React from "react";

// Summary component
// Props: tiles: Array<{ name: string, percentageValue: number }>
// Renders individual summary lines and overall percentage + message
export default function Summary({ tiles = [] }) {
  const total = tiles.reduce((s, t) => s + Number(t.percentageValue || 0), 0);
  const average = tiles.length ? total / tiles.length : 0;

  let message = "Neutral performance";
  // Simple thresholds for message
  if (average >= 70) message = "Excellent overall — strong positive";
  else if (average >= 50) message = "Good overall — positive trend";
  else if (average >= 30) message = "Fair overall — watch closely";
  else message = "Weak overall — needs attention";

  return (
    <div className="summary-card tile">
      <div className="tile-head">
        <div className="tile-name">Confluence Summary</div>
      </div>

      <div className="tile-body">
        <div className="S-tile-body">
          {tiles.map((t, i) => (
            <div key={i} className="S-property">
              <div className="property-left">
                <div className="property-label">{t.name}</div>
              </div>
              <div className="property-right">
                <div className={`property-value on`}>{t.percentageValue}%</div>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-overall">
          <div className="overall-percentage">
            Overall: {average.toFixed(1)}%
          </div>

          <div
            style={{ marginTop: 8, color: "var(--muted)" }}
            className="overall-message"
          >
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
