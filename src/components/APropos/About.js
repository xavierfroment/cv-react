import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const About = () => {

  return(
    <div className="container mx-auto">
      <h1 className="text-center">A Propos</h1>
      <br />
      <CardDeck className="m-3">
        <Card className="shadow mb-5 bg-white rounded">
          <Card.Header as="h5" className="text-center">Informations</Card.Header>
          <Card.Body>
            <ul className="list-unstyled">
              <li>Permis de conduire B</li>
              <li>Véhicule à disposition</li>
              <li>Né le 24 janvier 1979</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="shadow mb-5 bg-white rounded">
          <Card.Header as="h5" className="text-center">Intérêts</Card.Header>
          <Card.Body>
            <ul className="list-unstyled">
              <li>Création et édition d'images</li>
              <li>Utilisation de l'informatique</li>
              <li>Jeux video</li>
              <li>Bricolage</li>
            </ul>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}

export default About;