import React from "react";

const NumberButton = ({number, numeric, setNumeric, numericString}) => {
  // small check to see if number is sent through props.
  // console.log(number);

  // useState variable hook check.
  // console.log(numeric);
  return (
    <button 
    className='numeric-button' 
    data-numeric={number}
    onClick={() => setNumeric(numeric + number.toString())}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;
