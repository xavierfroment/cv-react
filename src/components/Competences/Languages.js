import React from 'react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaReact } from 'react-icons/fa'
import {SiAdobephotoshop, SiJavascript, SiMysql, SiSpring, SiVisualstudiocode } from 'react-icons/si'

function Languages() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <div className="card glassmorph shadow mb-3" style={{minHeight:"310px"}}>
            <h5 className="card-header text-center text-light">Front-end</h5>
            <div className="card-body">
              <div className="mb-3"><FaHtml5 size={30} style={{color:"#e34c26"}}/> <span className="text-light"> HTML</span></div>
              <div className="mb-3"><FaCss3Alt size={30} style={{color:"#264de4"}}/> <span className="text-light"> CSS</span></div>
              <div className="mb-3"><FaBootstrap size={30} style={{color:"#563d7c"}}/> <span className="text-light"> BootStrap</span></div>
              <div className="mb-3"><SiJavascript size={30} style={{color:"#f0db4f"}}/> <span className="text-light"> JavaScript ES6</span></div>
              <div><FaReact size={30} style={{color:"#61dbfb"}}/> <span className="text-light"> ReactJS</span></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card glassmorph shadow mb-3" style={{minHeight:"310px"}}>
            <h5 className="card-header text-center text-light">Back-end</h5>
            <div className="card-body">
              <div className="mb-3"><FaJava size={30} style={{color:"#3790c8"}}/> <span className="text-light"> Java (notions)</span></div>
              <div className="mb-3"><SiSpring size={30} style={{color:"#6cb33e"}}/> <span className="text-light"> Spring (notions)</span></div>
              <div><SiMysql size={30} style={{color:"#e79d26"}}/> <span className="text-light"> MySQL (notions)</span></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card glassmorph shadow mb-3" style={{minHeight:"310px"}}>
            <h5 className="card-header text-center text-light">Environnement</h5>
            <div className="card-body">
              <div className="mb-3"><SiVisualstudiocode size={30} style={{color:"#3790c8"}}/> <span className="text-light"> Visual Studio Code</span></div>
              <div className="mb-3"><FaGitAlt size={30} style={{color:"#e84e31"}}/> <span className="text-light"> Git</span></div>
              <div className="mb-3"><FaGithub size={30} style={{color:"#ffffff"}}/> <span className="text-light"> Github</span></div>
              <div><SiAdobephotoshop size={30} style={{color:"#8c327b"}}/> <span className="text-light"> Photoshop</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Languages
