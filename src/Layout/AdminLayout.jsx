import { useContext, useState } from "react";
import PageTitle from "../Components/PageTitle/PageTitle";
import Header from "../Pages/Shared/Header/Header";
import HeaderTop from "../Pages/Shared/HedaerTop/HeaderTop";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const { user } = useContext(AuthContext);

  const [activeNav, setActiveNav] = useState("");
  const navLinks = [
    "booklist",
    "addbook",
    "writerlist",
    "addwriter",
    "editorlist",
    "addeditor",
    "translatorlist",
    "addtranslator",
    "categorylist",
    "addcategory",
    "subcategorylist",
    "addsubcategory",
  ];

  return (
    <>
      <HeaderTop />
      <Header />

      <section className="container">
        <PageTitle
          title={["অ্যাডমিন ড্যাশবোর্ড", "Admin Dashboard", "لوحة تحكم المشرف"]}
        />

        <div className="grid grid-cols-12 mt-10">
          {/* -------------------------------------------Profile nav------------------------------------------- */}
          <div className="col-span-2 border border-2 flex flex-col items-center">
            {/* Image or First letter of name */}
            <div className="h-28 w-28 overflow-hidden bg-primary flex justify-center items-center rounded-full m-2">
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
              ADMIN
            </h3>
            {/* Navlinks */}
            <ul className="w-full mt-5 mb-96 ">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  onClick={() => setActiveNav(nav)}
                  className={`admin-nav py-2  block cursor-pointer ${
                    activeNav === nav && "active"
                  } hover:bg-gray-800 hover:text-white`}
                >
                  <Link to={nav} className="pl-3 text-md block capitalize">
                    {nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* -------------------------------------------Profile Nav Items------------------------------------------- */}
          <div className="col-span-10 border border-2 border-l-0">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
