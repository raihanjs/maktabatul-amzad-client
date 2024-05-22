import AuthTitle from "../Shared/AuthTitle/AuthTitle";
import Input from "../../../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import LinkSmall from "../../../Components/LinkSmall/LinkSmall";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { resetPassword } = useContext(AuthContext);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.mail.value.toLowerCase();
    if (email.includes("@") && email.includes(".com")) {
      setError("");
      resetPassword(email)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password Reset Email Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/auth/signin");
        })
        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
          });
        });
    } else {
      setError("Email is not valid");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div>
          {/* -------------------------------------Form Header-------------------------------------  */}
          <AuthTitle title="Reset" subTitle="Password" />
          <p className="w-[300px] md:w-[320px] my-3 text-justify fw-medium">
            Enter email associated with your account, and we will send you reset
            instructions
          </p>
          {/* -------------------------------------Form-------------------------------------  */}
          <form
            className="flex flex-col space-y-5 mt-5"
            onSubmit={handleResetPassword}
          >
            <Input name="mail" placeholder="Email" type="mail" />
            {error && <span className="text-red text-xs -mt-5">{error}</span>}
            <Input type="submit" name="RESET PASSOWRD" />
          </form>

          <div>
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
        </div>
      </div>
    </>
  );
}
