import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tile from "../components/Tile";
import Summary from "../components/Summary";

export default function Landing() {
  const tiles = [
    { name: "Sample Tile", percentageValue: 75 },
    { name: "Another Tile", percentageValue: 45 },
    { name: "Third Tile", percentageValue: 60 },
    { name: "Fourth Tile", percentageValue: 30 },
  ];

  return (
    <div className="landing-container">
      <Header />

      {/* Summary shows per-tile percentages and overall average */}
      <div style={{ margin: "0 8% 16px" }}>
        <Summary tiles={tiles} />
      </div>

      <div className="tile-container">
        {tiles.map((t, i) => (
          <Tile key={i} name={t.name} percentageValue={t.percentageValue} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
