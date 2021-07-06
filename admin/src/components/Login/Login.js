import React, {useState} from "react";
import "./Login.css";
import { isUserLoggedIn, login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector(state => state.auth);




  const userLogin =(e)=>{
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
  }

if(auth.authenticate){
  return <Redirect to={"/"}/>
}

  return (
    <section>
      <div class="imgBx"></div>
      <div class="contentBx">
        <div class="formBx">
          <h2>Login</h2>
          <form onSubmit={userLogin}>
            <div class="inputBx">
              <span>E-mail</span>
              <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
