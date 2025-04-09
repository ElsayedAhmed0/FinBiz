import React from "react";
import Introducing from "./Introducing";
import DashboardCard from "./DashboardCard";
import Testimonials from "./Testimonials";
import PricingSec from "./PricingSec";
import UpgradeFinances from "./UpgradeFinances"
const Home = () => {
  return (
    <main className="home_page">
      <div className="container">
        <Introducing />
        <DashboardCard />
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
