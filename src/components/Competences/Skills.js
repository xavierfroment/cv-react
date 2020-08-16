import React from 'react';
import Accordeon from './Accordeon';
import { Card } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center">Compétences</h1>
      <br/>
      <Card className="m-3 shadow rounded">
        <Accordeon 
          title="Développeur web junior" 
          content="<ul>
            <li>Conception de page web en HTML, CSS et JavaScript et utilisation de la bibliothèque React.JS avec Visual Studio Code</li>
            <li>Utilisation de la biliothèque Java Spring Boot avec Eclipse pour le Back-End</li>
            <li>Utilisation de l'outil JHipster pour la conception de base de données</li>
            <li>Maquettage de site internet</li>
            <li>Methode de travail Agile SCRUM</li>
            <li>Utilisation d'outil de versionning Git ainsi que de dépôts distants GitHub et GitLab</li>
          </ul>"
        />
        <Accordeon 
          title="Cariste" 
          content="<ul>
            <li>Gerbage et dégerbage de palettes sur rack</li>
            <li>Utilisation de chariots à mât rectractable catégorie CACES 5</li>
            <li>Application des règles de sécurité</li>
          </ul>"
        />
        <Accordeon 
          title="Préparateur de commandes" 
          content="<ul>
          <li>Utilisation de scanner de codes barres</li>
          <li>Port de charges lourdes</li>
          <li>Picking</li>
          <li>Utilisation de chariots auto-portés catégorie CACES 1</li>
        </ul>"
        />
        <Accordeon 
          title="Opérateur de sûreté" 
          content="<ul>
          <li>Inspection filtrage des passagers et des bagages de cabine</li>
          <li>Gardiennage de sites</li>
          <li>Contact avec les passagers</li>
        </ul>"
        />
        <Accordeon 
          title="Agent de sécurité" 
          content="<ul>
          <li>Surveillance et gardiennage d'usines</li>
          <li>Surveillance de magasin et d'hypermarché</li>
        </ul>"
        />
        <Accordeon 
          title="Technicien" 
          content="<ul>
            <li>Maintenance d'appareils électroménagers et audiovisuels en atelier</li>
            <li>Contact avec la clientèle</li>
          </ul>"
        />
        <Accordeon 
          title="Manutentionnaire" 
          content="<ul>
            <li>Déchargement de container</li>
            <li>Mise en palette de marchandises</li>
            <li>Conditionnement de palettes</li>
          </ul>"
        />
      </Card>
      
    </div>
  )
}

export default Skills;