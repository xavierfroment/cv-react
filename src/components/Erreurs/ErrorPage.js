import React from 'react'

const ErrorPage = (props) => {
  setTimeout(() => {
    props.history.push('/')
  }, 5000);

  return (
    <div className="container mx-auto m-3 text-light">
      <h1>Oups !</h1>
      <h2>Cette page</h2>
      <h2>n'existe pas</h2>
      <br />
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Vous allez être redirigé(e) dans 5 secondes !</strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}

export default ErrorPage


