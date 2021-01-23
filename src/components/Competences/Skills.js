import React from 'react';
import Progress from './Progress';
import SavoirFaire from './SavoirFaire';

const Skills = () => {
  return (
    <div className="container mx-auto bodyProgress">
      <h1 className="text-center text-light">Compétences</h1>
      <br/>
      <br/>
      <Progress/>
      <br/>
      <SavoirFaire/>
      <br/>
    </div>
  )
}

export default Skills;