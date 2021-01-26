import React from 'react';
import { FaDownload, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
import CvFormatA4 from '../img/pdf/cvxavierfroment.pdf'

const Social = () => {
  return (
    <div>
      <div className="text-center">  {/*Social Network buttons*/}
        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/xavier-froment-654734177/","_blank")} size={40} className="fa-icones mr-2"/>
        <FaFacebook onClick={() => window.open("https://www.facebook.com/xavier.froment.391","_blank")} size={40} className="fa-icones mr-2"/>
        <FaTwitter onClick={() => window.open("https://twitter.com/XFroment","_blank")} size={40} className="fa-icones mr-2"/>
        <FaEnvelope onClick={() => (window.location.href="mailto:fromentxavier@gmail.com")} size={40} className="fa-icones"/>
      </div> 
      <br/>
      <div className="text-center"> {/*Download CV button*/}
        <a href={CvFormatA4} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary btn-lg"><FaDownload /> Téléchargez ce CV</button></a>
      </div>
    </div>
  )
}

export default Social