import LinkSmall from "../../../Components/LinkSmall/LinkSmall";
import LinkLarge from "../../../Components/LinkLarge/LinkLarge";
import Input from "../../../Components/Input/Input";
import AuthTitle from "../Shared/AuthTitle/AuthTitle";
import SocialAuth from "../Shared/SocialAuth/SocialAuth";

export default function SignIn() {
  const handleSignIn = (event) => {
    console.log("clicked");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div>
          {/* -------------------------------------Form Header-------------------------------------  */}
          <AuthTitle title="User" subTitle="Sign In" />
          {/* -------------------------------------Form-------------------------------------  */}
          <form className="flex flex-col space-y-5 mt-5">
            <Input name="email" placeholder="Email" type="mail" />
            <Input name="password" placeholder="Password" type="password" />
            <div className="flex justify-end">
              <LinkLarge text="Forgot Password?" link="/auth/resetpassword" />
            </div>
            <Input type="submit" name="SIGN IN" />
          </form>
          {/* -----------------------------------New User----------------------------------- */}
          <div className="flex justify-center items center mt-2">
            <p className="text-slate-800 text-xs">Don't have an account?</p>
            <LinkSmall text="signup" link={"/auth/signup"} />
          </div>
          {/* ---------------------------------Social Login--------------------------------- */}
          <SocialAuth text="Sign In" />
        </div>
      </div>
    </>
  );
}
