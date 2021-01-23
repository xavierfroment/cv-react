import React from 'react';
import WhoAmI from './WhoAmI';
import Hobbies from './Hobbies';
import Social from './Social';
import './About.css';

const About = () => {
  return(
    <div className="container mx-auto">
      <h1 className="text-center text-light">A Propos</h1>
      <br />
      <br />
      <WhoAmI/>
      <br />      
      <Hobbies/>
      <br/>
      <Social/>
      <br/>
    </div>
  )
}

export default About;