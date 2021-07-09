import React from "react";
import "./Registercandidate.css";
import Reg from "./Reg.svg";
const Register = () => {
  return (
    <section>
      <div className="imgbx">
        <img src={Reg} />
      </div>
      <div className="contentbx">
        <div className="formbx">
          <h2>Nomination</h2>
          <form>
            <div className="inputbx">
              <span>Name</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>USN</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>Branch</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>Year</span>
              <input type="text" required />
            </div>

            <div className="inputbx">
              <input type="submit" value="Apply For Nomination" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
