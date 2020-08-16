import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="text-center">
      <h3>Chargement en cours...</h3>
      <br/>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
