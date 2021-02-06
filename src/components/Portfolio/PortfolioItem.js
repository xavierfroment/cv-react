import React from 'react'

const PortfolioItem = ({dataportfolio}) => (
  <div className="col-lg-4 col-md-6 col-md-auto mb-4">
    <div className="card glassmorph shadow">
      <div className="card-header">
        {dataportfolio.titre}
      </div>
      <img src={window.location.origin + `/cv-react/${dataportfolio.preview}`} className="car-img-top p-3 m-auto" style={{width: "300px", height:"173px"}} alt={dataportfolio.altpreview}/>
      <div className="card-body">
        <p>Description :</p>
        <p>{dataportfolio.desc}</p>
        <hr/>
        <div>
          <button className="btn btn-primary" onClick={() => window.open(`${dataportfolio.lienfolio}`,"_blank")}>Visiter cette page</button>
        </div>
      </div>
    </div>
  </div>
)

export default PortfolioItem;