import React from "react";
import "./Login.css";
import login from "./login.svg";

const Login = () => {
  return (
    <section>
      <div class="imgBx">
        <img src={login} alt=""/>
      </div>
      <div class="contentBx">
        <div class="formBx">
          <h2>Login</h2>
          <form>
            <div class="inputBx">
              <span>E-mail</span>
              <input type="text" />
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input type="password" />
            </div>
            <div class="remember">
              <label>
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            <div class="inputBx">
              <input type="submit" value="Sign in" name="" />
            </div>
            <div class="inputBx">
              <p>
                Don't have an account?{" "}
                <a target="_self" href="/Signup">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
