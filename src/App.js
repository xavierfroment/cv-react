import React, { Component, lazy, Suspense } from 'react';
//import Routes from './components/Routes';
import Loader from './components/Loader/Loader';
import './App.css';
import ScrollTop from './components/ScrollTop/ScrollTop';
const Routes = lazy(() => import("./components/Routes"));

class App extends Component {

  render() {
    return (
      <Suspense fallback={<Loader/>}>
        <ScrollTop/>
        <Routes />
      </Suspense>
    
    );
  }
}

export default App;