import React from 'react';

const house = (props) => {
  return (
    <div className="location__item">
      <h2 className="location__item--title">House</h2>
      <p className="location__item--desc">(earns 2-5 gold)</p>
      <button onClick={props.findGold} className="btn">Find Gold!</button>
    </div>
  );
}

export default house;