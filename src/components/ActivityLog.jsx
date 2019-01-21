import React from 'react';

const activityLog = (props) => {
  const activities = props.log.map((ele, key) => {
    let color = 'green';
    if (ele.gold < 0) {
      color = 'red';
    }
    return (
      <div key={key} style={{color: color}} className="activity-log__item">
        <p>Earned {ele.gold} from the {ele.location}</p>
        <p>{ele.timestamp.toString()}</p>
      </div>
    );
  })
  return (
    <div className="activity-log">
      <p className="activity-log__desc">Activities</p> 
      <div className="activity-log__container">
        {activities}
      </div>
    </div>
  )
}

export default activityLog;