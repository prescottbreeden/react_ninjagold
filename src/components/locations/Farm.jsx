import React from 'react';

const farm = (props) => {
  return (
    <div className="location__item">
      <h2 className="location__item--title">Farm</h2>
      <p className="location__item--desc">(earns 10-20 golds)</p>
      <button onClick={props.findGold} className="btn">Find Gold!</button>
    </div>
  );
}

export default farm;