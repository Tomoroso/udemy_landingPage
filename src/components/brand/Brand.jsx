import React from 'react'
import {nasdaq,volkswagen,box,netapp,eventbrite} from './imports'
import './brand.css'

const Brand = () => {
  return (
    <div className="udemy__brand">
      <div>
        <img src={nasdaq} alt="nasqad"/>
      </div>
      <div>
        <img src={volkswagen} alt="volkswagen"/>
      </div>
      <div>
        <img src={box} alt="box"/>
      </div>
      <div>
        <img src={netapp} alt="netapp"/>
      </div>
      <div>
        <img src={eventbrite} alt="eventbrite"/>
      </div>
    </div>
  )
}

export default Brand