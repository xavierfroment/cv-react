import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './APropos/About';
import Home from './Accueil/Home';
import Knowledge from './Connaissances/Knowledge';
import Experiences from './Parcours/Experiences';
import Skills from './Competences/Skills';
import Portfolio from './Portfolio/Portfolio';
import ErrorPage from './Erreurs/ErrorPage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/career" component={Experiences} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About} />
          <Route component={ErrorPage}/>
        </Switch> 
      </BrowserRouter> 
    )
  }
}

export default Routes
