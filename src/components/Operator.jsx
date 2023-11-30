import React from 'react';

const Operator = ({ item, onClick }) => {
  return (
    <button
      className="btn btn-primary operator-button"
      onClick={() =>{
        onClick(item)
      } }
    >
      {item}
    </button>
  );
};

export default Operator;
