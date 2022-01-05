import React, {useState} from "react";
import { addVote, mineBlock, replaceChain } from "../../actions";
import "./Dash.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";



import dash from "./dash.svg";
const Dash = () => {
  const auth = useSelector(state => state.auth);
  const block = useSelector(state => state.blockchain);

  const dispatch = useDispatch();

 if (!auth.authenticate){
  return <Redirect to={"/"} />;
 }

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

  const handle_alreadyVoted = (classNa) => {
    let element = document.getElementById(classNa);
    element.innerHTML = "You can't vote twice!"
  }

  // const freshVote = (classNam) => {
  //     let element = document.getElementById(classNam);
  //     element.innerHTML = "Voted successfully"
  // }


  return (
    <div className="Voter-container">
		<div className="main-container">
			<div className="poster-container">
                <a href="#"><img src={dash} className="poster" /></a>
                <h1>Kalash</h1>
			</div>
			<div className="containerrr">
				<div className="contentt">
					<h4 className="title">Description</h4>
					<p id="kal" className="des">
						
					</p>
					
					<button className="btnn" onClick={!block.already_voted ? () => blockchainMagic("Kalash") : () => handle_alreadyVoted("kal") }>Vote</button>
				</div>
			</div>
		</div>

		<div className="main-container">
			<div className="poster-container">
                <a href="#"><img src={dash} className="poster" /></a>
                <h1>Abhishek</h1>
			</div>
			<div className="containerrr">
				<div className="contentt">
					<h4 className="title">Description</h4>
					<p  id="abhi"className="des"></p>
					
					<button className="btnn" onClick={!block.already_voted ? () => blockchainMagic("Abhishek") : () => handle_alreadyVoted("abhi") }>Vote</button>
				</div>
			</div>
		</div>
    
	</div>
    // <>
    // <button onClick={() => blockchainMagic("Kalash")}>Vote Kalash</button>
    // <button onClick={() => blockchainMagic("Abhishek") }>Vote Abhishek</button>
    // </>
   
  );
};
export default Dash;
