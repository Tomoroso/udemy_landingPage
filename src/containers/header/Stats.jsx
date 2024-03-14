import React from 'react'
import './stats.css'

const Stats = () => {
    return (
      <div className="udemy__header-stats">

        <div className="stats_circle wawe__container">
            <span>64M learners</span>
            <div className="wawe"></div>
        </div>

        <div className="stats_circle wawe__container">
            <span>210,000 courses</span>
            <div className="wawe"></div>
        </div>
        <div className="stats_circle wawe__container">
            <span>75,000 instructors</span>
            <div className="wawe"></div>
        </div>
        <div className="stats_circle wawe__container">
            <span>870M course enrollments</span>
            <div className="wawe"></div>
        </div>
      </div>
    )
}

export default Stats;