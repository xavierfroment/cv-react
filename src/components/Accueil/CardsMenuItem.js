import React from 'react';
import { Button } from 'react-bootstrap';


const CardsMenuItem = ({ datahome }) => (
  <div className="col mb-4">
    <div className="shadow card">
      <img src={`/${datahome.picture}`} className="card-img-top p-3" alt={datahome.picturealt} />
      <div className="card-body">
        <h5 className="card-title">{datahome.overlaying.title}</h5>
        <p className="card-text">{datahome.overlaying.description}</p>
        <Button 
          variant='primary'
          size='lg'
          href={datahome.overlaying.lien}
          className="m-2"
        >Consulter</Button>
      </div>
    </div>
  </div>
)

export default CardsMenuItem;
