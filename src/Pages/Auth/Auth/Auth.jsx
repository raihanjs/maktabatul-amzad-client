import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <Link
          to="signin"
          className="w-[300px] md:w-[320px] py-2 rounded-sm bg-gray-600 text-white cursor-pointer hover:bg-gray-900 text-center mb-1"
        >
          Sign In
        </Link>
        <Link
          to="signup"
          className="w-[300px] md:w-[320px] py-2 rounded-sm bg-gray-600 text-white cursor-pointer hover:bg-gray-900 text-center mb-1"
        >
          Sign Up
        </Link>

        <Link
          to="resetpassword"
          className="w-[300px] md:w-[320px] py-2 rounded-sm bg-gray-600 text-white cursor-pointer hover:bg-gray-900 text-center"
        >
          Reset Password
        </Link>
      </div>
    </>
  );
}
