import React from 'react';

const casino = (props) => {
  return (
    <div className="location__item">
      <h2 className="location__item--title">Casino</h2>
      <p className="location__item--desc">(earns/takes 0-50 gold)</p>
      <button onClick={props.findGold} className="btn">Find Gold!</button>
    </div>
  );
}

export default casino;