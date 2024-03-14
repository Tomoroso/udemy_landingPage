import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className="udemy__cta">
      <div className="udemy__cta-content">
        <p>Choose your first course</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="udemy__cta-btn">
        <a href="https://www.udemy.com/join/signup-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Flogin-popup%2F%3Flocale%3Den_US%26response_type%3Dhtml%26next%3Dhttps%253A%252F%252Fwww.udemy.com%252Flogout%252F" ><button type="button">Get Started</button></a>
      </div>
    </div>
  )
}

export default CTA