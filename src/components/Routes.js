import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Accueil/Home';
import Experiences from './Parcours/Experiences';
import Skills from './Competences/Skills';
import Portfolio from './Portfolio/Portfolio';
import About from './APropos/About';
//import ErrorPage from './Erreurs/ErrorPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/career" component={Experiences} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About} />
          {/*<Route component={ErrorPage}/>*/}
        </Switch> 
      </Router> 
    )
  }
}

export default Routes