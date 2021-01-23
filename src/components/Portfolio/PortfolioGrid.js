import React from 'react';
import folioport from './dataportfolio';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = () => folioport.length > 0 && (
  <div className="row">
    {folioport.map((data, index) => (
      <PortfolioItem dataportfolio={data} key={index} />
    ))}
  </div>

);

export default PortfolioGrid