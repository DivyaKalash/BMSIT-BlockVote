import React from 'react';
import {Button} from 'react-bootstrap';
import { checkValid, getResult, replaceChain } from '../../actions';
import './Main.css';
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

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
          dispatch(getResult());
        }
      })
    }
  })
}

  return (
    <>
      {/* <div class="container2">
        <Button style={{ background: '#992e4d', color: '#fff' }} r>
          Button1
        </Button>
      </div>
      <br />
      <div class="container2">
        <Button style={{ background: '#992e4d', color: '#fff' }} block>
          Button2
        </Button>
      </div> */}
      <button onClick={() => checkValidity()}>Check Valid</button>
      <button onClick={() => getBlockResult()}>Get Result</button>
    </>
  );
};

export default Main;
