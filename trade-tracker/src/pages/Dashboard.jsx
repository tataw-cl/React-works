import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Placeholder data — wire to real state or API later
  const balances = [
    { account: "Broker A", value: 12500.5 },
    { account: "Broker B", value: 8400 },
    { account: "Crypto", value: 3200.75 },
  ];

  const total = balances.reduce((s, b) => s + b.value, 0);

  return (
    <div className="page-container dashboard-page">
      <Header />

      <main className="page-main">
        <div className="page-header">
          <h1>Dashboard</h1>
          <div className="page-actions">
            <Link to="/new" className="btn btn-primary">
              New trade
            </Link>
          </div>
        </div>

        <section className="balances">
          <h2>Balances</h2>
          <div className="balances-row">
            {balances.map((b, i) => (
              <div className="balance-card" key={i}>
                <div className="balance-value">
                  $
                  {b.value.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className="balance-label">{b.account}</div>
              </div>
            ))}

            <div className="balance-card total">
              <div className="balance-value">
                $
                {total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="balance-label">Total</div>
            </div>
          </div>
        </section>

        <section className="performance">
          <h2>Performance</h2>
          <div className="chart-area">
            <Line
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  {
                    label: "Portfolio value",
                    data: [10000, 10250, 10100, 10500, 11000, 11250],
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59,130,246,0.2)",
                    tension: 0.3,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: false },
                },
                scales: {
                  y: { beginAtZero: false },
                },
              }}
            />
          </div>
        </section>

        <section className="quick-stats">
          <h2>Quick stats</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">62%</div>
              <div className="stat-label">Win rate</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">1.8%</div>
              <div className="stat-label">Avg return / trade</div>
            </div>

            <div className="stat-card">
              <div className="stat-value">2.5x</div>
              <div className="stat-label">Profit factor</div>
            </div>
          </div>
        </section>

        <div className="footer-spacer" />
      </main>

      <Footer />
    </div>
  );
}
