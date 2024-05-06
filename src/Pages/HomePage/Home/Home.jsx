import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeTabs from "../HomeTabs/HomeTabs";
import SideNav from "../../../Components/SideNav/SideNav";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeTabs />

      <div className="container">
        <SideNav></SideNav>
      </div>
    </div>
  );
}
