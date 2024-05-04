import React, { useContext, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { CiSettings, CiLogin, CiHeart } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

export default function HeaderTopAccount() {
  const navigate = useNavigate();
  const { user, signoutUser } = useContext(AuthContext);
  const accountRef = useRef(null);
  const [accountOpen, setAccountOpen] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== accountRef.current) {
      setAccountOpen(false);
    }
  });

  const handleSignoutUser = () => {
    signoutUser()
      .then(() => {
        navigate("/auth/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="relative">
      <button
        className="flex items-center"
        ref={accountRef}
        onClick={() => setAccountOpen(!accountOpen)}
      >
        <BsFillPersonFill className="text-md mr-1" /> Account
      </button>
      {/* Profile */}
      {accountOpen && (
        <div className="absolute w-[200px] -left-32 z-50">
          <div className="bg-white rounded-sm overflow-hidden border pt-2">
            <ul>
              {user?.email === "maktabatulamzad@gmail.com" && (
                <li className="p-2 hover:bg-gray-100">
                  <Link
                    to="/admin"
                    className=" text-gray-900 font-medium block flex items-center"
                  >
                    <MdOutlineAdminPanelSettings className="text-xl mr-1" />
                    Admin
                  </Link>
                </li>
              )}

              <li className="p-2 hover:bg-gray-100">
                <Link
                  to="/user"
                  className=" text-gray-900 font-medium block flex items-center"
                >
                  <CiSettings className="text-xl mr-1" />
                  Profile
                </Link>
              </li>
              {/* <li className="p-2 hover:bg-gray-100">
                <Link className=" text-gray-900 font-medium block flex items-center">
                  <CiHeart className="text-xl mr-1" /> Favorites
                </Link>
              </li> */}
              {user ? (
                <li className="p-2 hover:bg-gray-100">
                  <button
                    className=" text-gray-900 font-medium block flex items-center"
                    onClick={handleSignoutUser}
                  >
                    <CiLogin className="text-xl mr-1" /> Logout
                  </button>
                </li>
              ) : (
                <li className="p-2 hover:bg-gray-100">
                  <Link
                    to="/auth/signin"
                    className=" text-gray-900 font-medium block flex items-center"
                  >
                    <CiLogin className="text-xl mr-1" /> Login
                  </Link>
                </li>
              )}
              <hr />
              {user && (
                <li className="p-2 hover:bg-gray-100">
                  <Link className="flex items-center space-x-2 block ">
                    <div>
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt=""
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <FaUserAlt className="h-8 w-8 rounded-full" />
                      )}
                    </div>
                    <div className="w-7/12 truncate">
                      <p className="text-gray-900 font-bold capitalize truncate">
                        {user?.displayName}
                      </p>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
