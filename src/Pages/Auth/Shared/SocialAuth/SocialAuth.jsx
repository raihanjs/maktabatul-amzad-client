import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";

export default function SocialAuth({ text }) {
  const axiosPublic = useAxiosPublic();

  const { setUser, signinUserGoogle } = useContext(AuthContext);

  const handleGoogleSignin = () => {
    signinUserGoogle()
      .then((res) => {
        setUser(res.user);
        const userDetails = {
          name: res.user.displayName,
          email: res.user.email,
          role: "user",
        };
        // Save user to database
        axiosPublic.post("/users", userDetails).then((res) => {
          if (res.data.insertedId) {
            // navigate("/");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col space-y-2 mt-5">
      {/* <button className="w-[300px] md:w-[320px] bg-[#4267B2]/75 py-2 text-white fw-medium rounded-sm hover:bg-[#4267B2] flex justify-center items-center">
        {text} With Facebook
        <FaFacebook className="ml-3 text-2xl" />
      </button> */}
      <button
        className="w-[300px] md:w-[320px] bg-[#DB4437]/75 py-2 text-white fw-medium rounded-sm hover:bg-[#DB4437] flex justify-center items-center"
        onClick={handleGoogleSignin}
      >
        {text} With Google
        <FaGoogle className="ml-3 text-2xl" />
      </button>
    </div>
  );
}
