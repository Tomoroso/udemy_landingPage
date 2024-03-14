import React, {useState} from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './whatUdemy.css'
import Feature from '../../components/feature/Feature'

const WhatUdemy = () => {

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

    <div className="udemy__whatUdemy section__margin" id="wudemy" >
      <div className="udemy__whatUdemy-feature" >
        <Feature title="What is Udemy" text="Udemy is an online learning platform that offers a wide range of courses on various subjects, allowing learners to acquire new skills or enhance existing ones through self-paced, instructor-led content."/>
      </div>
      <div className="udemy__whatUdemy-heading">
        <h1 className="gradient__text" >Learn anything, anytime, anywhere with Udemy.</h1>
        <p>Explore the advantages:</p>
      </div>
      <div className="udemy__whatUdemy-container" >
        <Feature title="Wide Course Selection" text="Udemy offers a vast library of courses on diverse topics, providing learners with a wide range of options to choose from based on their interests and learning goals."/>
        <Feature title="Flexible Learning Experience" text="Udemy's self-paced courses allow learners to study at their own convenience, providing flexibility in terms of time, location, and learning speed. This makes it accessible for busy individuals or those with different schedules."/>
        <Feature title="Expert Instructors and Practical Content" text="Udemy courses are taught by industry professionals, subject matter experts, or passionate instructors who provide comprehensive and practical content. Learners can benefit from the expertise and real-world experience of the instructors, gaining valuable skills and knowledge."/>
      </div>
    </div>



      </div>  
    </ScrollTrigger>
  </div>




  )
}

export default WhatUdemy