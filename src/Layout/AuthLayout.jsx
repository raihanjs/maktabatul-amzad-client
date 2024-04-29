import React from "react";
import AuthHeader from "../Pages/Auth/Shared/AuthHeader/AuthHeader";
import AuthFooter from "../Pages/Auth/Shared/AuthFooter/AuthFooter";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </>
  );
}
