import React, { useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { CiSettings, CiLogin, CiHeart } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { Link } from "react-router-dom";

export default function HeaderTopAccount() {
  const accountRef = useRef(null);
  const [accountOpen, setAccountOpen] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== accountRef.current) {
      setAccountOpen(false);
    }
  });
  return (
    <div className="relative">
      <button
        className="flex items-center"
        ref={accountRef}
        onClick={() => setAccountOpen(!accountOpen)}
      >
        <BsFillPersonFill className="text-md mr-1 -mt-1" /> Account
      </button>
      {/* Profile */}
      {accountOpen && (
        <div className="absolute w-[200px] -left-32 z-50">
          <div className="bg-white rounded-sm overflow-hidden border pt-2">
            <ul>
              <li className="p-2 hover:bg-gray-100">
                <Link className=" text-gray-900 font-medium block flex items-center">
                  <MdOutlineAdminPanelSettings className="text-xl mr-1 -mt-1" />
                  Admin
                </Link>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <Link className=" text-gray-900 font-medium block flex items-center">
                  <CiSettings className="text-xl mr-1 -mt-1" />
                  Edit Profile
                </Link>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <Link className=" text-gray-900 font-medium block flex items-center">
                  <CiHeart className="text-xl mr-1 -mt-1" /> Favorites
                </Link>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <Link className=" text-gray-900 font-medium block flex items-center">
                  <CiLogin className="text-xl mr-1 -mt-1" /> Logout
                </Link>
              </li>
              <hr />
              <li className="p-2 hover:bg-gray-100">
                <Link className="flex items-center space-x-2 block ">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      className="h-8 w-8 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-7/12 truncate">
                    <p className="text-gray-900 font-bold">Borhan Ashrafi</p>
                    {/* <p className="text-gray-900">User</p> */}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
