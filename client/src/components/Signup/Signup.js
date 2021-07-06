import React, { useState } from "react";
import Login from "../Login/Login";
import "./Signup.css";
import Sign from "./Signup.svg";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";

const Signup = () => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [USN, setUSN] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (user.loading) {
    return <p>Loading...</p>;
  }

  const userSignup = (e) => {
    e.preventDefault();
    const user = { name, USN, email, password };
    dispatch(signup(user));
  };
  return (
    <section>
      <div className="imgbx">
        <img src={Sign} />
      </div>
      <div className="contentbx">
        <div className="formbx">
          <h2>Signup</h2>
          <form onSubmit={userSignup}>
            <div className="inputbx">
              <span>Name</span>
              <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="inputbx">
              <span>USN</span>
              <input type="text" placeholder="Enter USN" value={USN} onChange={(e) => setUSN(e.target.value)}  required />
            </div>
            <div className="inputbx">
              <span>E-mail</span>
              <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="inputbx">
              <span>Password</span>
              <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            
            <div className="remember">
              <label>
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            
            <div className="inputbx">
              <input type="Submit" value="Sign up" name="" />
            </div>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
