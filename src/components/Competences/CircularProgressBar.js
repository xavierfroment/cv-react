import React, {useEffect, useState, useRef} from 'react';
import './Progress.css';

const CircularProgressBar = props => {

  const [offset, setOffset] = useState(0);
  //ease effect part1
  const circleRef = useRef(null);
  //circle attributes
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke
  } = props;
  
  //maths part
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    //ease effect part 2
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';
  },[setOffset, progress, circumference, offset]);

  return (
    <>
      <svg
        className="circular-chart"
        width={size}
        height={size}
      >
        <circle
          className="circular-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        >
        </circle>
        <circle
          className="circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        ></circle>
        <text
          className="percentage"
          x={center}
          y={center}
        >
          {progress}%
        </text>
      </svg>
    </>
    
  )
}

export default CircularProgressBar
