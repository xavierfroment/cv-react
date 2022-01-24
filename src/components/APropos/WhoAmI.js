import React from 'react';
import moi from '../img/moi.jpg'

const WhoAmI = () => {
  return (
    <div className="card shadow mb-4 glassmorph">
      <div className="card-header h5 text-center text-light">Qui suis-je</div>
      <div className='row no-gutters'>
        <div className='col-md-4'>
        <img src={moi} alt='Xavier Froment' className="card-img-top p-2 m-auto" />
      </div>
      <div className='col-md-8'>
        <div className="card-body">
          <p className="text-light text-about">Développeur front-end junior spécialisé dans la technologie ReactJS, avec des connaissances en VueJS. Créatif, autonome, curieux et aimant travailler en équipe, je souhaiterais rejoindre une entreprise afin de participer aux développements de ses projets.</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default WhoAmI
