import React from "react";

const Display = ({numeric}) => {
  return (
    <div className='display'>
      <h2>{numeric}</h2>
    </div>
  );
};

export default Display;
