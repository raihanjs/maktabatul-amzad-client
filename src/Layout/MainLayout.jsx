import React from "react";
import HeaderTop from "../Pages/Shared/HedaerTop/HeaderTop";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

export default function MainLayout() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
    </>
  );
}
