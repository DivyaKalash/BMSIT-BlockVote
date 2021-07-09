
import React from 'react';
import Button from 'react-bootstrap/Button';
import './Voter.css';
const Voter = () => {
  return (
    <>
      <div class="container">
        <Button style={{ background: '#992e4d', color: '#fff' }} r>
          Apply For Nomination
        </Button>
      </div>
      <br />
      <div class="container2">
        <Button style={{ background: '#992e4d', color: '#fff' }} block>
          Vote For Candidate
        </Button>
      </div>
    </>
  );
};

export default Voter;
