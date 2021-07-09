import React from "react";
import { Link } from "react-router-dom";
import "./Cont.scss";
const Content = () => {
  return (
    <div className="container">
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
