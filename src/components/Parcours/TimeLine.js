import React from 'react';
import timeLineData from './data';
import TimeLineItem from './TimeLineItem';

const TimeLine = () => timeLineData.length > 0 && (
    <div className="timeline-container">
      {timeLineData.map((data, index) => (
        <TimeLineItem data={data} key={index} />
      ))}
    </div>
  );

export default TimeLine;