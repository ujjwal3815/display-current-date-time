import React from 'react';
import './style.css';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const App = () => {
  return (
    <>
      <h1> My Name is UJJWAL TIWARI </h1>
      <p> Current Date is : {currDate} </p>
      <p> Current Time is : {currTime} </p>
    </>
  );
};

export default App;
