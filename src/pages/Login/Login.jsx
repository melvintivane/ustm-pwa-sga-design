import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login__container">
        <div>
          <h1 className="login__title">Login</h1>
          <p className="login__text">Hi, Welcome back</p>
          <button className="button button-alt">
            <span className="icon-google"></span>Login with Google
          </button>
        </div>
        <div className="hr__container">
          <hr />
          <p className="login__text alt">or Login with Email</p>
          <hr />
        </div>
        <div>
          <p className="login__text">Email</p>
          <input
            className="login__input"
            type="email"
            placeholder="jonhdoe@email.com"
          />
        </div>
        <div>
          <p className="login__text">Password</p>
          <input
            className="login__input"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="login__span">
          <p className="login__text">
            <input type="checkbox" />
            Remember me
          </p>
          <p className="login__text text-alt">Forgot password?</p>
        </div>
        <button className="button">Login</button>
      </div>
    </div>
  );
};

export default Login;
