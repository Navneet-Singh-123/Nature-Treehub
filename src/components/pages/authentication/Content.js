import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="login_container">
      <div className="login_wrapper">
        <div className="login_header">
          <h1>Login</h1>
        </div>
        <div className="login_container">
          <label for="uname" className="login_input">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw" className="login_input">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit">Login</button>
          <div className="login_footer">
            <div className="footer_l">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <div className="footer_r">
              <Link className="login_password_forgot">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
