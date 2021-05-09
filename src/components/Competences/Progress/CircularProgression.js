import React from 'react'
import CircularProgressBar from './CircularProgressBar'

const CircularProgression = ({ databar }) => {
  const state= {
    size: 200,
    progress: `${databar.pourcent}`,
    strokeWidth:15,
    circleOneStroke:`${databar.couleur1}`,
    circleTwoStroke:`${databar.couleur2}`
  }

  return (
    <div className="col-lg-4 col-md-6 col-md-auto mb-4">
      <div className="card glassmorph shadow">
        <div className="card-body">
          <CircularProgressBar {...state}/>
        </div>
        <div className="card-footer text-light text-center">
          {databar.skillname}
        </div>
      </div>
    </div>
  )
};

export default CircularProgression;