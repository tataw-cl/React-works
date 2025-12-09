import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tile from "../components/Tile";

export default function Landing() {
  return (
    <div className="landing-container">
      <Header />
      <div className="tile-container">
        <Tile name="Sample Tile" percentageValue={75} />
        <Tile name="Another Tile" percentageValue={45} />
        <Tile name="Third Tile" percentageValue={60} />
        <Tile name="Fourth Tile" percentageValue={30} />
      </div>

      <Footer />
    </div>
  );
}
