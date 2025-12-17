import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { tradeServices } from "../services/tradeServices";

export default function History() {
  const { user } = useAuth();
  const [trades, setTrades] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      if (!user) return setLoading(false);
      setLoading(true);
      try {
        const data = await tradeServices.getTradesByUser(user.id);
        setTrades(data || []);
      } catch (err) {
        console.error("Failed to load trades:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [user]);

  const totalPnL = trades.reduce((sum, t) => sum + (t.pnl || 0), 0);

  return (
    <div className="page-container history-page">
      <Header />

      <main className="page-main">
        <div className="page-header">
          <h1>Trade History</h1>
          <div className="page-actions">
            <Link to="/new" className="btn btn-primary">
              Record trade
            </Link>
          </div>
        </div>

        <section className="summary">
          <div className="summary-item">
            <div className="summary-value">{trades.length}</div>
            <div className="summary-label">Trades</div>
          </div>

          <div className="summary-item">
            <div className="summary-value">${totalPnL.toFixed(2)}</div>
            <div className="summary-label">Total P&amp;L</div>
          </div>
        </section>

        <section className="trades-list">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="trades-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t) => (
                  <tr key={t.id}>
                    <td>{new Date(t.created_at).toLocaleString()}</td>
                    <td>
                      <pre style={{ whiteSpace: "pre-wrap" }}>
                        {JSON.stringify(t.tiles, null, 2)}
                      </pre>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <div className="footer-spacer" />
      </main>

      <Footer />
    </div>
  );
}
