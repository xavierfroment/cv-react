import React from 'react'
import { FaSearch } from 'react-icons/fa'

const PortfolioItem = ({dataportfolio}) => (
  <div className="col-lg-4 col-md-6 col-md-auto mb-4">
    <div 
      className="card glassmorph shadow" 
      style={{minHeight:"500px"}}
    >
      <h5 className="card-header">
        {dataportfolio.titre}
      </h5>
      <img 
        src={window.location.origin + `/cv-react/${dataportfolio.preview}`} 
        className="card-img-top p-3 m-auto" 
        alt={dataportfolio.altpreview}
      />
      <div className="card-body">
        <h4>Description</h4>
        <p>{dataportfolio.desc}</p>
      </div>
      <div className="card-footer">
        <button 
          className="btn btn-primary" 
          onClick={() => window.open(`${dataportfolio.lienfolio}`,"_blank")}
        >
          <FaSearch/> Visiter cette page
        </button>
      </div>
    </div>
  </div>
)

export default PortfolioItem;