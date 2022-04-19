import React, { useState, useEffect }  from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    
  }

  const [show, handleShow] = useState(false);

        const transitionNavBar = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        }

        useEffect(() => {
            window.addEventListener("scroll", transitionNavBar);
            return () => window.removeEventListener("scroll", transitionNavBar);
        }, []);
  return (
    <div className={`Navbar-container ${show && "nav__black"}`}>
    <div className='navbar-left'>
    <h2>C-KER</h2>
    <h3 onClick={handleClick}>{click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }</h3>
    </div>
    <div className={click ? 'show-menu' : 'navbar-right'}>
    <ul>
    <li onClick={closeMobileMenu}>
      <Link to='/' smooth>Home</Link>
    </li>
    <li onClick={closeMobileMenu}>
      <Link to='/About' smooth>About</Link>
    </li>
    <li onClick={closeMobileMenu}>
      <Link to='/Contacts' smooth>Contacts</Link>
    </li>
    <li onClick={closeMobileMenu}>
      <Link to='/SignIn' smooth>Sign In</Link>
    </li>
    <li onClick={closeMobileMenu}>
      <Link to='/account' smooth>Account</Link>
    </li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar