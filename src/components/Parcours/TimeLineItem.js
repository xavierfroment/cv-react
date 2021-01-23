import React from 'react'

const TimeLineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content glassmorph text-white">
      <span className="tag" style={{ background: data.categorie.color }}>
        {data.categorie.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <p>{data.location}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimeLineItem;
