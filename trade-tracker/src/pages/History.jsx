import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function History() {
  // Sample data — replace with real API/state later
  const trades = [
    {
      id: 1,
      symbol: "AAPL",
      side: "Buy",
      size: 10,
      price: 172.5,
      pnl: 45.0,
      date: "2025-12-01",
    },
    {
      id: 2,
      symbol: "TSLA",
      side: "Sell",
      size: 2,
      price: 210.0,
      pnl: -32.5,
      date: "2025-11-28",
    },
    {
      id: 3,
      symbol: "BTC-USD",
      side: "Buy",
      size: 0.01,
      price: 42000,
      pnl: 120.0,
      date: "2025-11-15",
    },
  ];

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
          <table className="trades-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Symbol</th>
                <th>Side</th>
                <th>Size</th>
                <th>Price</th>
                <th>P&amp;L</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.symbol}</td>
                  <td>{t.side}</td>
                  <td>{t.size}</td>
                  <td>{t.price}</td>
                  <td className={t.pnl >= 0 ? "pnl-positive" : "pnl-negative"}>
                    {t.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="footer-spacer" />
      </main>

      <Footer />
    </div>
  );
}
