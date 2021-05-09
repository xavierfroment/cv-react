import React from 'react';
import barProgress from './databar';
import CircularProgression from './CircularProgression'

const Progress = () => barProgress.length > 0 && (
  <div className="row">
    {barProgress.map((data, index) => (
      <CircularProgression databar={data} key={index} />
    ))} 
  </div>
);

export default Progress;

