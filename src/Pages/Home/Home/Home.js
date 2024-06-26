import React from "react";
import Hero from "../Hero/Hero";
import HomeBookTabs from "../HomeBookTabs/HomeBookTabs";
import HomeRests from "../HomeRests/HomeRests";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeBookTabs></HomeBookTabs>
      <HomeRests></HomeRests>
    </div>
  );
};

export default Home;
