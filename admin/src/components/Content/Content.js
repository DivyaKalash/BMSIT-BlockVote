import React from "react";
import { Link } from "react-router-dom";
import "./Cont.scss";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const Content = () => {
  const auth = useSelector(state => state.auth);
  if (!auth.authenticate){
    return <Redirect to={"/Login"} />;
   }
  return (
    <div className="container2">
      <div className="card__container">
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">Voting</h3>
            <p className="card__info">No Of Votes For Placement Cordinator</p>
            <Link to={"/Main"}>
              <button className="card__button"> Go </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
