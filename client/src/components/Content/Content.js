import React from "react";
import { Link } from "react-router-dom";
import "./Cont.scss";
const Content = () => {
  return (
    <div class="container">
      <div class="card__container">
        <div class="card">
          <div class="card__content">
            <h3 class="card__header">Voting</h3>
            <p class="card__info">Voting For Placement Cordinator</p>
            <Link to={"/Dash"}>
              <button class="card__button"> Go </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
