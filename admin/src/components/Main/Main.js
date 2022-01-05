import React,{useState} from 'react';
import { checkValid, getResult, replaceChain } from '../../actions';
import './Main.css';
import result from "./Result.svg";
import valid from "./Valid.svg";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


const Main = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const block = useSelector(state => state.blockchain);

  if (!auth.authenticate){
    return <Redirect to={"/"} />;
   }

  const checkValidity = () => {
    dispatch(replaceChain()).then((result) => {
      if(result){

        dispatch(checkValid());
      }
    })
  }
const getBlockResult = () =>{
  dispatch(replaceChain()).then((resul) => {
    if(resul){

      dispatch(checkValid()).then((result) => {
        if(result){
          dispatch(getResult())
        }
      })
    }
  })
}
const renderresultdiv = (kalVote, abhiVote, mess) =>{
  return(
    <div className="ress">
    <h1>Voting Result</h1>
    <p style={{paddingTop: "15px", fontWeight: "bold", paddingBottom: "1px", fontSize: "20px"}}>Kalash: {kalVote}</p>
    <p style={{padding: "5px 0", fontWeight: "bold", fontSize: "20px"}}>Abhishek: {abhiVote}</p>
    <p style={{fontWeight: "bold", fontSize: "35px", paddingTop: "20px"}}>{mess}</p>
  </div>
  )
}

const renderValidiv = (mess) => {
  return(
    <div className="validd">
    <h1 style={{paddingTop: "25px"}}>{mess}</h1>

  </div>
  )
}


  return (
    <>
    <div className="Voter-container">
		<div className="main-container">
			<div className="poster-container">
                <a href="#"><img src={result} className="poster" /></a>
                {/* <h1>Result</h1> */}
			</div>
			<div className="container">
				<div className="content">
		
					
					<button className="btn" onClick={() => getBlockResult()}>Get Result</button>
				</div>
			</div>
		</div>

		<div className="main-container">
			<div className="poster-container">
                <a href="#"><img src={valid} className="poster" /></a>
                {/* <h1>Validate</h1> */}
			</div>
			<div className="container">
				<div className="content">
					
					
					<button className="btn" onClick={() => checkValidity()}>Check Validity</button>
				</div>
			</div>
		</div>
	</div>
  <div id="res">
    {/* <div className="ress">
    <h1>Voting Result</h1>
    <p style={{paddingTop: "15px", fontWeight: "bold", paddingBottom: "1px", fontSize: "20px"}}>Kalash: 3</p>
    <p style={{padding: "5px 0", fontWeight: "bold", fontSize: "20px"}}>Abhishek: 4</p>
    <p style={{fontWeight: "bold", fontSize: "35px", paddingTop: "20px"}}>Congratulations, Abhishek won by 1 vote...</p>
  </div> */}
  {/* <div className="validd">
    <h1 style={{paddingTop: "25px"}}>Chain is valid!</h1>

  </div> */}
  {block.valid && !block.getRes ? renderValidiv(block.message) : null}
  {block.getRes && !block.valid ? renderresultdiv(block.Kalash, block.Abhishek, block.message): null}
  </div>
    </>
  );
};

export default Main;
