import React from "react";
import Introducing from "./Introducing";
import DashboardCard from "./DashboardCard";
import Testimonials from "./Testimonials";
import PricingSec from "./PricingSec";
import UpgradeFinances from "./UpgradeFinances";
import NavBarSec from "./NavBarSec";
import BgChartDB from "./BgChartDB"
const Home = () => {
  return (
    <main className="home_page">
      <div className="container">
        <Introducing />
        <DashboardCard />
        <NavBarSec />
        <BgChartDB />
        <Testimonials />
      </div>
      <div className="container_fluid next_sec">
        <PricingSec />
        <UpgradeFinances />
      </div>
    </main>
  );
};

export default Home;
