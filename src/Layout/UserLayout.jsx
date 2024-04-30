import React, { useContext } from "react";
import Header from "../Pages/Shared/Header/Header";
import HeaderTop from "../Pages/Shared/HedaerTop/HeaderTop";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../Components/PageTitle/PageTitle";
import { AuthContext } from "../Providers/AuthProviders";

export default function UserLayout() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <HeaderTop />
      <Header />
      <section className="container">
        <PageTitle title={["আমার প্রোফাইল", "My Profile", "ملفي"]} />

        <div className="grid grid-cols-12 mt-10">
          {/* -------------------------------------------Profile nav------------------------------------------- */}
          <div className="col-span-3 border border-2 flex flex-col items-center">
            {/* Image or First letter of name */}
            <div className="h-36 w-36 overflow-hidden bg-primary flex justify-center items-center rounded-full m-2">
              {user?.photoURL ? (
                <img src={user?.photoURL} className="h-36 w-36" alt="" />
              ) : (
                <p className="text-6xl font-bold uppercase">
                  {user?.displayName.slice(0, 1)}
                </p>
              )}
            </div>
            {/* Name */}
            <h3 className="text-center my-2 font-semibold capitalize text-xl m-2">
              {user?.displayName}
            </h3>
            {/* Navlinks */}
            <ul className="bg-gray-500 w-full mt-5 mb-96">
              <li className="py-2 border-b">
                <Link to="" className="pl-3 text-white text-lg font-semibold">
                  Profile
                </Link>
              </li>
              <li className="py-2 border-b">
                <Link
                  to="orders"
                  className="pl-3 text-white text-lg font-semibold"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>
          {/* -------------------------------------------Profile Nav Items------------------------------------------- */}
          <div className="col-span-9 border border-2 border-l-0">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
