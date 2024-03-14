import React from 'react'
import {Article} from '../../components'
import { course1, course2, course3, course4, course5} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="udemy__blog section__padding" id="blog" >
      <div className="udemy__blog-heading">
        <h1 className="gradient__text">Try some of the bestseller courses:</h1>
      </div>
      <div className="udemy__blog-container" >
        <div className="udemy__blog-container_groupA">
          <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"><Article imgUrl={course1} date="January 2024" title="Next.js 14 & React - The Complete Guide"/></a>
        </div>
        <div className="udemy__blog-container_groupB">
        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"><Article imgUrl={course2} date="February 2024" title="The Complete 2024 Web Development Bootcamp"/></a>
          <a href="https://www.udemy.com/course/the-complete-javascript-course/"><Article imgUrl={course3} date="January 2024" title="The Complete JavaScript Course 2024: From Zero to Expert!"/></a>
          <a href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/"><Article imgUrl={course4} date="February 2024" title="[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02"/></a>
          <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/"><Article imgUrl={course5} date="November 2023" title="iOS & Swift - The Complete iOS App Development Bootcamp"/></a>
        </div>
      </div>
    </div>
  )
}

export default Blog