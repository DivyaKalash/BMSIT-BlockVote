import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section>
      <div class="imgBx"></div>
      <div class="contentBx">
        <div class="formBx">
          <h2>Login</h2>
          <form>
            <div class="inputBx">
              <span>E-mail</span>
              <input type="text" required />
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input type="password" required />
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
                <a target="_parent" href="/Signup">
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
