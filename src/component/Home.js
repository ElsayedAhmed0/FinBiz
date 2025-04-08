import React from "react";
import Introducing from "./Introducing";
import DashboardCard from "./DashboardCard";
import Testimonials from "./Testimonials";
import PricingSec from "./PricingSec"
const Home = () => {
  return (
    <main className="home_page">
      <div className="container">
        <Introducing />
        <DashboardCard />
        <Testimonials />
        <PricingSec />
      </div>
    </main>
  );
};

export default Home;
