import React from 'react';

const cave = (props) => {
  return (
    <div className="location__item">
      <h2 className="location__item--title">Cave</h2>
      <p className="location__item--desc">(earns 5-10 golds)</p>
      <button onClick={props.findGold} className="btn">Find Gold!</button>
    </div>
  );
}

export default cave;