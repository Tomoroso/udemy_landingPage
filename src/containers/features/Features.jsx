import React, {useState} from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import Feature from '../../components/feature/Feature'


import './features.css'

const featuresData = [
  {
    title: "Extensive Course Library:",
    text: "Udemy offers a vast collection of courses on a wide range of topics, providing learners with a diverse selection to choose from, including business, technology, personal development, creative arts, and more."
  },
  {
    title: "Self-Paced Learning:",
    text: "Courses on Udemy are self-paced, allowing learners to study at their own speed and convenience. There are no strict deadlines or schedules, enabling individuals to balance their learning with other commitments."
  },
  {
    title: "Lifetime Access:",
    text: "Once enrolled in a course, learners gain lifetime access to the course materials. This means they can revisit the content, review lectures, and access any updates or additional resources that may be added in the future."
  },
  {
    title: "Interactive Learning Features:",
    text: "Udemy offers various interactive learning features such as video lectures, quizzes, coding exercises, assignments, and discussion boards. These features enhance the learning experience and provide opportunities for hands-on practice and knowledge application."
  },
]

const Features = () => {
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

        <div className="udemy__features section__padding" id="features">
          <div  className="udemy__features-heading gradient__text">
            <h1>Unlock your limitless potential with Udemy's world-class learning platform.</h1>
          </div>
          <div className="udemy__features-container">
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
          </div>
        </div>

      </div>  
    </ScrollTrigger>
  </div>
)
}

export default Features