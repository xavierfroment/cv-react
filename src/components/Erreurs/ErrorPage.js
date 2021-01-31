import React from 'react'

const ErrorPage = (props) => {
  setTimeout(() => {
    props.history.push('/')
  }, 5000);

  return (
    <div className="container mx-auto text-center m-3 text-light">
      <h1>Erreur</h1>
      <br/>
      <br/>
      <div className="card col-8 m-auto glassmorph">
        <div className="card-header bg-danger text-center">ATTENTION ! Erreur 404 !</div>
        <div className="card-body text-center">
          <h2>Il semblerait que vous vous êtes perdu.e</h2>
          <br/>
          <br/>
          <p>Vous allez être redirigé.e à l'accueil dans quelques instants...</p>
        </div>
        <div className="card-footer bg-danger text-center">ATTENTION ! Erreur 404 !</div>  
      </div>
    </div>
  )
}

export default ErrorPage