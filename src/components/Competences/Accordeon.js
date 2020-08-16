import React, { useRef, useState } from 'react';
import Chevron from '../img/Chevron';
import './Accordeon.css';

function Accordeon(props) {
  //Hooks useState
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("accordionIcon");
  
  //hook useRef
  const content = useRef(null);

  //function toggle accordeon
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px` );
    setRotateState(setRotate === "active" ? "accordionIcon" : "accordionIcon rotate" );
  }


  return (
    
    <div className="accordionSection">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion} >
        <span className="accordionTitle">{props.title}</span>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div 
        ref={content}  
        style={{maxHeight: `${setHeight}`}} 
        className="accordionContent" 
      >
        <div 
          className="accordionText" 
          dangerouslySetInnerHTML={{__html: props.content}}
        >
        </div>
      </div>
    </div>
    
  )
}

export default Accordeon;
