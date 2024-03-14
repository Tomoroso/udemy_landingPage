import React, {useState} from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  const [isVisible, setIsVisible] = useState();

  const onEnterViewport = () => {
      setIsVisible(true);
  }
  const onExitViewport = () => {
      setIsVisible(false);
  }


  return (
    <div>
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={`${isVisible ? "left-to-right" : ""}`}>
    <div className="udemy__possibility section__padding" id="possibility" >
      <div className="udemy__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="udemy__possibility-content" >
        <h4>Your time is everything you have.</h4>
        <h1 className="gradient__text">Mark this day as a new begining</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Don't let it slip behind your eyes.</h4>
      </div>
    </div>

      </div>  
    </ScrollTrigger>
  </div>


  )
}

export default Possibility