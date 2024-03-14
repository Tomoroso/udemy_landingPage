import React, {useEffect, useRef } from 'react';
import Feature from '../../components/feature/Feature'
import './features.css'




const ScrollAnimation = (props) => {
    const targetRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      });
  
      const targetElement = targetRef.current;
      observer.observe(targetElement);
  
      //Cleanup the ebserver when the component unmounts
      return () => {
        observer.unobserve(targetElement);
      };
    }, []);


    

    return (

      <div ref={targetRef} className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading gradient__text test">
      <h1 >Unlock your limitless potential with Udemy's world-class learning platform.</h1>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
      
    )
  }

export default ScrollAnimation;

