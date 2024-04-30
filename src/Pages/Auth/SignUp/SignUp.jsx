import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Input/Input";
import LinkSmall from "../../../Components/LinkSmall/LinkSmall";
import AuthTitle from "../Shared/AuthTitle/AuthTitle";
import SocialAuth from "../Shared/SocialAuth/SocialAuth";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

import Swal from "sweetalert2";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";

export default function SignUp() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { setUser, createUserEmail, updateUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const userDetails = { name, email, role: "user" };

    // Signup User
    createUserEmail(email, password)
      .then((res) => {
        setUser(res.user);
        // Update User Display Name
        updateUser(res.user, name)
          .then(() => {
            console.log("Displayname Updated");
          })
          .catch((error) => {
            console.log(error);
          });
        // Save user to database
        axiosPublic.post("/users", userDetails).then((res) => {
          if (res.data.insertedId) {
            // navigate("/");
          }
        });
      })
      .catch((error) => {
        const errMsg = error.toString();
        if (errMsg.includes("email-already-in-use")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User already exist",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something Error",
          });
        }
      });
  };
  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div>
          {/* -------------------------------------Form Header-------------------------------------  */}
          <AuthTitle title="User" subTitle="SignUp" />
          {/* -------------------------------------Form-------------------------------------  */}
          <form
            className="flex flex-col space-y-5 mt-5"
            onSubmit={handleSignup}
          >
            <Input name="name" placeholder="Full Name" type="text" />
            <Input name="email" placeholder="Email" type="mail" />
            <Input name="password" placeholder="Password" type="password" />

            <Input type="submit" name="SIGN UP" />
          </form>
          {/* -----------------------------------New User----------------------------------- */}
          <div className="flex justify-center items center mt-2">
            <p className="text-slate-800 text-xs">Already have an account?</p>
            <LinkSmall text="signin" link={"/auth/signin"} />
          </div>
          {/* ---------------------------------Social Login--------------------------------- */}
          <SocialAuth text="Sign Up" />
        </div>
      </div>
    </>
  );
}
