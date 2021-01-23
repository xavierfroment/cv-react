import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({dataportfolio}) => (
  <div className="col-lg-4 col-md-6 col-md-auto mb-4">
    <div className="card glassmorph shadow">
      <div className="card-header">
        {dataportfolio.titre}
      </div>
      <img src={`/${dataportfolio.preview}`} className="car-img-top p-3 m-auto" style={{width: "300px"}} alt={dataportfolio.altpreview}/>
      <div className="card-body">
        <p>Description :</p>
        <p>{dataportfolio.desc}</p>
        <hr/>
        <div>
          <Link to={{pathname: `${dataportfolio.lienfolio}`}} target="_blank"><button className="btn btn-primary">Visiter cette page</button></Link>
        </div>
      </div>
    </div>
  </div>
)

export default PortfolioItem;