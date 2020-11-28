import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'

const Knowledge = () => {
  return (
    <div  className="container mx-auto">
      <h1 className="text-center">Connaissances</h1>
      <br/>
      <CardDeck className="m-3">
        <Card className="shadow mb-5 bg-white rounded">
          <Card.Header as="h5" className="text-center">Langages et Bibliothèques</Card.Header>
          <Card.Body>
            <ul className="list-unstyled">
              <li>HTML / CSS</li>
              <li>JavaScript</li>
              <li>React.JS</li>
              <li>Bootstrap 4</li>
              <li>Java</li>
              <li>SpringBoot</li>
              <hr/>
              <li>Anglais: Lu, écrit</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="shadow mb-5 bg-white rounded">
          <Card.Header as="h5" className="text-center">Logiciels et Outils</Card.Header>
          <Card.Body>
            <ul className="list-unstyled">
              <li>Visual Studio Code</li>
              <li>Eclipse</li>
              <li>JHipster</li>
              <li>Git, GitHub et GitLab</li>
              <li>Trello</li>
              <li>Slack</li>
              <li>Photoshop</li>
            </ul>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Knowledge
