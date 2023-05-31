import React from "react";
import logo from "assets/logo.png";
import google from "assets/google.svg";
import microsoft from "assets/microsoft.svg";
import "./auth.scss";
import { NavLink } from "react-router-dom";

export const Authentication = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <section>
      <div className="logo">
        <img src={logo} alt="OpenAI Logo" />
      </div>
      <form className="form">
        <h1>Welcome back</h1>

        <div className="formContainer">
          <div className="formControl">
            <input type="email" />
            <label>Email address</label>
          </div>

          <div className="formControl">
            <input type="password" autoComplete="false" />
            <label>Password</label>
          </div>

          {isLoading ? (
            <button className="formControl" disabled>
              {/* <Loading /> */}
            </button>
          ) : (
            <button className="formControl">
              <p>Continue</p>
            </button>
          )}
        </div>

        <div className="noAct">
          <p>Don't have an account?</p>
          <NavLink className="link">Sign up</NavLink>
        </div>

        <div className="or">
          <div />
          <p>OR</p>
        </div>

        <div className="otherButtons">
          <button>
            <img src={google} alt="google" />
            <p>Continue with google</p>
          </button>
          <button>
            <img src={microsoft} alt="microsoft" />
            <p>Continue with Microsoft Account</p>
          </button>
        </div>
      </form>
    </section>
  );
};
