import React from 'react'
import udemyLogo from "../../assets/logo-udemy-inverted.svg"
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `© ${year} Udemy, Inc.`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



  return (
    <div className="udemy__footer section__padding">
      <div className="udemy__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
      </div>
      <div className="udemy__footer-btn">
        <a href="https://www.udemy.com/"><p>Press to gain access</p></a>
      </div>

      <div className="udemy__footer-links">
        <div className="udemy__footer-links_logo">
          <img onClick={scrollToTop} src={udemyLogo} alt="logo"/>
          <p>If you feel that you loose time, Learn.</p>
        </div>
        <div className="udemy__footer-links_div">
          <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer"><p>Udemy Business</p></a>
          <a href="https://www.udemy.com/teaching/?ref=teach_footer"><p>Teach on Udemy</p></a>
          <a href="https://www.udemy.com/mobile/"><p>Get the app</p></a>
          <a href="https://about.udemy.com/?locale=en-us"><p>About us</p></a>
          <a href="https://about.udemy.com/company?locale=en-us#offices"><p>Contact us</p></a>
        </div>

        <div className="udemy__footer-links_div">
          <a href="https://about.udemy.com/careers?locale=en-us"><p>Careers</p></a>
          <a href="https://blog.udemy.com/?ref=footer"><p>Blog</p></a>
          <a href="https://www.udemy.com/support/"><p>Help and Support</p></a>
          <a href="https://www.udemy.com/affiliate/"><p>Affiliate</p></a>
          <a href="https://investors.udemy.com/"><p>Investors</p></a>
        </div>

        <div className="udemy__footer-links_div">
          <a href="https://www.udemy.com/terms/"><p>Terms</p></a>
          <a href="https://www.udemy.com/terms/privacy/"><p>Privacy policy</p></a>
          <a href="https://www.udemy.com/sitemap/"><p>Sitemap</p></a>
          <a href="https://about.udemy.com/accessibility-statement?locale=en-us"><p>Accessibility statement</p></a>
        </div>
      </div>
        <div className="udemy__footer-copyright">
          <p>{copyright}</p>
        </div>
    </div>
  )
}

export default Footer