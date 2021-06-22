import React from "react";
import "./Registercandidate.css";
import Reg from "./Reg.svg";
const Register = () => {
  return (
    // <section>
    //   <div className="imgbx">
    //     <img src={Reg} />
    //   </div>
    //   <div className="contentbx">
    //     <div className="formbx">
    //       <h2>Nomination</h2>
    //       <form>
    //         <div className="inputbx">
    //           <span>Name</span>
    //           <input type="text" required />
    //         </div>
    //         <div className="inputbx">
    //           <span>USN</span>
    //           <input type="text" required />
    //         </div>
    //         <div className="inputbx">
    //           <span>Branch</span>
    //           <input type="text" required />
    //         </div>
    //         <div className="inputbx">
    //           <span>Year</span>
    //           <input type="text" required />
    //         </div>

    //         <div className="inputbx">
    //           <input type="submit" value="Apply For Nomination" name="" />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="imgbx">
        <img src={Sign} />
      </div>
      <div className="contentbx">
        <div className="formbx">
          <h2>Signup</h2>
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
              <span>E-mail</span>
              <input type="text" required />
            </div>
            <div className="inputbx">
              <span>Password</span>
              <input type="password" required />
            </div>
            <div className="inputbx">
              <span>Confirm Password</span>
              <input type="password" required />
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            <div className="inputbx">
              <input type="submit" value="Sign up" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
