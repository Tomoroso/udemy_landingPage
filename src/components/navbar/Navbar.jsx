import React, {useState, useEffect} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Udemy_logo.png';
import shopCart from '../../assets/shopping-cart.png'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const [isElementVisible, setElementVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setElementVisible(false);
      } else {
        setElementVisible(true);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

const Menu = () => (
  <>
  <p><a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=httpcachecontextsme-list&path=request-demo-mx%2F&ref=ufb_header">Udemy Business</a></p>
  <p><a href="https://www.udemy.com/teaching/?ref=teach_header">teach on Udemy</a></p>
   
  </>
)




  return (
    <div className="udemy__navbar">
      <div className="udemy__navbar-links">
        <div className="udemy__navbar-links_logo">
          <a href="https://www.udemy.com/"><img src={logo} alt="logo" /></a>
        </div>
        <div className="udemy__navbar-links_container">
          <Menu />
         
           

        </div>
      </div>
      <div className="udemy__navbar-sign">
      <div> {isElementVisible && <p><a href="https://www.udemy.com/cart/"><img className="card__img-fullscreen" src={shopCart} alt="shopCard" /></a></p>}</div>
      
      <a href="https://www.udemy.com/join/login-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Fsignup-popup%2F%3Flocale%3Den_US%26response_type%3Dhtml%26next%3Dhttps%253A%252F%252Fwww.udemy.com%252Fjoin%252Flogin-popup%252F%253Flocale%253Den_US%2526response_type%253Dhtml%2526next%253Dhttps%25253A%25252F%25252Fwww.udemy.com%25252Flogout%25252F">
        <p>Sign in</p>
      </a>
        <a href="https://www.udemy.com/join/signup-popup/?locale=en_US&response_type=html&next=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Flogin-popup%2F%3Flocale%3Den_US%26response_type%3Dhtml%26next%3Dhttps%253A%252F%252Fwww.udemy.com%252Flogout%252F"><button type="button">Sign up</button></a>
        
      </div>
      <div className="udemy__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line  color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="udemy__navbar-menu_container">
            <div className="udemy__navbar-menu_container-links">
            <Menu />
            <p><a href="https://www.udemy.com/cart/"><img className="card__img" src={shopCart} alt="shopCard" /></a></p>
            <div className="udemy__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar