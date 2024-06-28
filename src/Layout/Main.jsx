import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import HeaderTop from "../pages/Shared/HeaderTop/HeaderTop";

export default function Main() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
