import React, {useState} from "react";
import { addVote, mineBlock, replaceChain } from "../../actions";
import "./Dash.css";
import { useDispatch, useSelector } from "react-redux";


import dash from "./dash.svg";
const Dash = () => {
  const auth = useSelector(state => state.auth);
  const block = useSelector(state => state.blockchain);

  const dispatch = useDispatch();

 

  const blockchainMagic = (voteTO) => {
    const voteInfo = {
      "voter": auth.user.USN,
      "voted": voteTO
    }
    dispatch(replaceChain()).then((result) => {
      if (result){
        dispatch(addVote(voteInfo)).then((resul) => {
          if(resul){
            dispatch(mineBlock());
          }
        })
      }
    })
  }


  return (
    <>
    <button onClick={() => blockchainMagic("Kalash")}>Vote Kalash</button>
    <button onClick={() => blockchainMagic("Abhishek") }>Vote Abhishek</button>
    </>
    // <div className="hero-container">
    //   <div className="main-container">
    //     <div className="poster-container">
    //         <img src={dash} className="poster" />
    //     </div>
    //     <div className="container3">
    //       <div className="content3">
    //         <h4 className="title">Name Of Candidate</h4>
    //         <p className="description">Description About Candidate</p>

    //         <button className="vote-btn">Vote</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Dash;
