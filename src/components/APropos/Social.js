import React from 'react';
import { FaDownload, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div>
      <div className="text-center">  {/*Social Network buttons*/}
        <Link className="text-reset mr-2" to={{ pathname:"https://www.linkedin.com/in/xavier-froment-654734177/"}} target="_blank"><FaLinkedin size={40} className="fa-icones"/></Link>
        <Link className="text-reset mr-2" to={{ pathname:"https://www.facebook.com/xavier.froment.391"}} target="_blank"><FaFacebook size={40} className="fa-icones"/></Link>
        <Link className="text-reset mr-2" to={{ pathname:"https://twitter.com/XFroment"}} target="_blank"><FaTwitter size={40} className="fa-icones"/></Link>
        <Link to={{pathname: "mailto:fromentxavier@gmail.com"}} target="_blank"><FaEnvelope size={40} className="fa-icones"/></Link>
      </div> 
      <br/>
      <div className="text-center"> {/*Download CV button*/}
        <Link to={{pathname: "../pdf/cvxavierfroment.pdf"}} target="_blank"><button className="btn btn-primary btn-lg"><FaDownload /> Téléchargez ce CV</button></Link>
      </div>
    </div>
  )
}

export default Social
