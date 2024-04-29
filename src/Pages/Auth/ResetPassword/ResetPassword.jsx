import React from "react";
import AuthHeader from "../Shared/AuthHeader/AuthHeader";
import AuthTitle from "../Shared/AuthTitle/AuthTitle";
import Input from "../../../Components/Input/Input";
import AuthFooter from "../Shared/AuthFooter/AuthFooter";
import { Link } from "react-router-dom";
import LinkSmall from "../../../Components/LinkSmall/LinkSmall";

export default function ResetPassword() {
  return (
    <>
      <AuthHeader />
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div>
          {/* -------------------------------------Form Header-------------------------------------  */}
          <AuthTitle title="Reset" subTitle="Password" />
          <p className="w-[300px] md:w-[320px] my-3 text-justify fw-medium">
            Enter email associated with your account, and we will send you reset
            instructions
          </p>
          {/* -------------------------------------Form-------------------------------------  */}
          <form className="flex flex-col space-y-5 mt-5">
            <Input name="email" placeholder="Email" type="mail" />

            <Input type="submit" name="RESET PASSOWRD" />

            <div>
              <div className="flex justify-center items-center text-xs text-gray-500">
                <p>If you can't receive email, &nbsp;</p>
                <LinkSmall text="Contact Us" link="" />
              </div>
              <div className="flex justify-center items-center text-xs text-gray-500 mt-5">
                <p>Remember password?, &nbsp;</p>
                <Link
                  className="border-b border-gray-500 border-dotted hover:text-gray-700 hover:border-gray-700"
                  to="/auth/signin"
                >
                  Go back to login page
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
