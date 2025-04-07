import React from "react";
import Introducing from "./Introducing";
import DashboardCard from "./DashboardCard"
const Home = () => {
  return (
    <main className="home_page">
      <div className="container">
        <Introducing />
        <DashboardCard />
      </div>
    </main>
  );
};

export default Home;
