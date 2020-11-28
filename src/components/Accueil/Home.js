import React from 'react';
import { Container } from 'react-bootstrap';
import CardsMenu from './CardsMenu'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Bienvenue</h1>
        <br/>
        <h2>Je suis blablabla</h2>
        <br/>
        <p>Développeur web désireux de relever de nouveaux défis, assidu, également rigoureux, respectueux, ponctuel, autonome et curieux, je souhaiterais rejoindre une entreprise afin de participer aux déveleppements de ses projets.</p><br/>
        <div className="row row-cols-1 row-cols-md-4 mb-2">
          <CardsMenu/>
        </div>
      </Container>
    </div>
  )
}

export default Home;
