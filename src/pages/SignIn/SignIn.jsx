import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import signInLottie from "../../assets/Lotties/Signin (2).json";
import Lottie from "lottie-react";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";
const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log("location in sign in page", location);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Registering with", { email, password });

    // Signin user
    signInUser(email, password)
      .then((result) => {
        console.log("User signed in successfully", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.error("Error signing in user", error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full max-w-sm shrink-0">
          <Lottie animationData={signInLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
