import React from 'react';
import Languages from './Languages';
import SavoirFaire from './SavoirFaire';

const Skills = () => {
  return (
    <div className="container mx-auto bodyProgress">
      <h1 className="text-center text-light">Compétences</h1>
      <br/>
      <br/>
      <Languages/>
      <br/>
      <SavoirFaire/>
      <br/>
    </div>
  )
}

export default Skills;