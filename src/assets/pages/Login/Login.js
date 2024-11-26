import React, { useState } from "react";
import SigninForm from "./components/signinForm/SigninForm";
import SignUpForm from "./components/signoutForm/SignUpForm";
import "./Login.scss";
import { LuPlaneTakeoff } from "react-icons/lu";

function Login() {
  const [isActive, setIsActive] = useState(false);

  const handleSignUpClick = () => {
    setIsActive(true);
  };

  const handleSignInClick = () => {
    setIsActive(false);
  };

  return (
    <body className="bodyLogin">
      <div className="loginContainer">
        <div
          className={`container ${isActive ? "right-panel-active" : ""}`}
          id="main"
        >
          <div className="sign-up">
            <SignUpForm />
          </div>
          <div className="sign-in">
            <SigninForm />
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Welcome back!</h1>
                <p>
                  To manage your reservations and access your benefits, log in
                  with your credentials.
                </p>
                <button id="signIn" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>

              <div className="overlay-right">
                <h1>Hello!</h1>
                <p>
                  Join our <span>airline</span> and start enjoying a unique
                  flight experience with exclusive benefits.
                </p>

                <button id="signUp" onClick={handleSignUpClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
