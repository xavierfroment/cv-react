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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis enim asperiores eveniet nisi quidem aliquid blanditiis reprehenderit distinctio quod! Ab qui facilis perferendis hic doloremque tempora, fuga vitae dolorum.</p><br/>
          <div className="row row-cols-1 row-cols-md-4 mb-2">
            <CardsMenu/>
            
            {/*<div className="col mb-4">

              <button className="btn btn-info btn-circle">Black</button>

            </div>*/}
          </div>
          
      
        </Container>
      
      
    </div>
  )
}

export default Home;
