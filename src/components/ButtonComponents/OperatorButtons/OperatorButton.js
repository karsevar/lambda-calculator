import React from "react";

const OperatorButton = ({char, value, operation, setOperation, calculations, setCalculations, numeric, setNumeric}) => {
  // console.log(calculations);
  return (
    <button 
    className='operator-button' 
    id={value}
    onClick={() => {
      setOperation(char);
      setCalculations([
        ...calculations,
        numeric,
        char
      ]);
      setNumeric('');

    }}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {char}
    </button>
  );
};

export default OperatorButton;
