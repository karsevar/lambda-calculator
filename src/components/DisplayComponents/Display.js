import React from "react";

const Display = ({numeric, operation}) => {
  // console.log(operation);
  // the click handler in OperatorButton actually changes the state of operation.

  return (
    <div className='display'>
      <h2>{numeric}</h2>
    </div>
  );
};

export default Display;
