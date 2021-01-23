import React, { Component } from 'react';
import TimeLine from './TimeLine';
import './Experiences.css'

class Experiences extends Component {
  render() {
    return (
      <div  className="container mx-auto"> 
        <h1 className="text-center text-light">Parcours professionnel</h1>
        <br/>
        <TimeLine />
      </div>
    )
  }
}

export default Experiences
