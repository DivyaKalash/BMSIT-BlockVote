import React from 'react';
import Button from 'react-bootstrap/Button';
import './Main.css';
const Main = () => {
  return (
    <>
      <div class="container2">
        <Button style={{ background: '#992e4d', color: '#fff' }} r>
          Button1
        </Button>
      </div>
      <br />
      <div class="container2">
        <Button style={{ background: '#992e4d', color: '#fff' }} block>
          Button2
        </Button>
      </div>
    </>
  );
};

export default Main;
