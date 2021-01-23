import React from 'react'
import datasavoirfaire from './datasavoirfaire'

function SavoirFaire() {
  const savoirList = datasavoirfaire.map((datasf, index) => <li key={index}>{datasf}</li>)
  return (
    <div className="container">
      <div className="card glassmorph text-light">
        <div className="card-header text-center">
          <h4>Savoir-faire</h4>
        </div>
        <div className="card-body">
          <ul>
            {savoirList}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default SavoirFaire;