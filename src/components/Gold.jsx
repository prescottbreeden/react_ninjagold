import React from 'react';

const gold = (props) => {
  return (
    <div className="gold">
      <p className="gold__desc">Your Gold:</p>
      <p className="gold__quantity">{props.gold}</p>
    </div>
  );
}

export default gold;