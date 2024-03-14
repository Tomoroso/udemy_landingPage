import React, {useState} from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './header.css'
import Stats from './Stats'
import noTimeWaste from "../../assets/no_time_waste.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState();

  const onEnterViewport = () => {
      setIsVisible(true);
  }
  const onExitViewport = () => {
      setIsVisible(false);
  }


  return (
  <div className="udemy__header section__padding" id="home">



    <div className="udemy__header-content">
      <h1 className="gradient__text">"Transform Your Future with Udemy's Online Learning"</h1>
      <p>An online learning platform with a vast selection of courses taught by expert instructors.</p>


      <div >
      <Stats />
      </div>
    </div>
    
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={`${isVisible ? "left-to-right" : ""}`}>

    <div className="udemy__header-image">
    
      <img src={noTimeWaste} alt="noTimeWaste"/>
    </div>

    </div>  
    </ScrollTrigger>

  </div>
  )
}

export default Header