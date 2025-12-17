import React from "react";
import { tradeServices } from "../services/tradeServices";
import { useAuth } from "../contexts/AuthContext";

// Summary component
// Props: tiles: Array<{ name: string, percentageValue: number }>
// Renders individual summary lines and overall percentage + message
export default function Summary({ tiles = [] }) {
  const total = tiles.reduce((s, t) => s + Number(t.percentageValue || 0), 0);
  const overall = tiles.length ? total : 0;

  let message = "Neutral performance";
  // Simple thresholds for message
  if (overall >= 70) message = "Excellent overall — strong positive";
  else if (overall >= 50) message = "Good overall — positive trend";
  else if (overall >= 30) message = "Fair overall — watch closely";
  else message = "Weak overall — needs attention";

  const [saving, setSaving] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const { user } = useAuth();

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      if (!user) throw new Error("You must be signed in to save a trade.");

      const payload = {
        user_id: user.id,
        tiles: tiles.map((t) => ({
          name: t.name,
          percentageValue: Number(t.percentageValue || 0),
        })),
        overall: Number(overall || 0),
        created_at: new Date().toISOString(),
      };

      console.log("Saving trade payload:", payload);
      await tradeServices.saveTradeWithProfileCheck(user.id, payload);
      setStatus({ ok: true, msg: "Trade saved successfully!" });
      // Optional: Reset UI state here
    } catch (err) {
      console.error("Database Error:", err);
      let userFriendlyMsg = "Something went wrong. Please try again.";
      if (err.code === "23505")
        userFriendlyMsg = "This trade ID already exists.";
      else if (err.code === "42P01")
        userFriendlyMsg = "Configuration error: Table not found.";
      else if (err.message && err.message.includes("fetch"))
        userFriendlyMsg = "Network error. Check your internet connection.";
      else if (err.message && err.message.includes("signed in"))
        userFriendlyMsg = "You must be signed in to save.";
      setStatus({ ok: false, msg: userFriendlyMsg });
    } finally {
      setSaving(false);
    }
  };

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
            Overall: {overall.toFixed(1)}%
          </div>

          <div
            style={{ marginTop: 8, color: "var(--muted)" }}
            className="overall-message"
          >
            {message}
          </div>
        </div>

        <div className="summary-actions" style={{ marginTop: 12 }}>
          <button
            className="btn btn-primary save-btn"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save summary"}
          </button>
          {status && (
            <div className={`save-status ${status.ok ? "ok" : "err"}`}>
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
