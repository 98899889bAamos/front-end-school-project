import React, { useState, useEffect }  from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import { HashLink as Link } from 'react-router-hash-link'
import { useHistory } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [fullBar, setFullBar] = useState(false);

  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();

  async function logOut()
  {
     localStorage.clear()
      history.push('/')
  }


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

       const whitePerl = (e) => {
         setFullBar(true);
       }
       useEffect(() => {
         whitePerl()
       }, []);
        useEffect(() => {
          const allLi = document.querySelector('.close-li').querySelectorAll("li");
          function changeMenuActive() {
            allLi.forEach(n => n.classList.remove('mimo'));
            this.classList.add("mimo")
          }
          allLi.forEach( n => n.addEventListener('click', changeMenuActive))
        }, []);
       
  return (
    <div className={`Navbar-container ${show && "nav__black"}`}>
    <div className='navbar-left'>
    <h2><span style={{ color: '#0071f3' }}>C-K</span>ER</h2>
    <h3 onClick={handleClick}>{click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }</h3>
    </div>
    <div className={click ? 'show-menu' : 'navbar-right'}>
    <ul className='close-li'>
    {
      fullBar && localStorage.getItem('user-info') ?
      <>
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
      <Link to='/account' smooth style={{ color: '#FAB162' }}>{user.data.username}</Link>
    </li>
    <li onClick={closeMobileMenu}>
      <Link to='/account' smooth onClick={logOut}>Log Out</Link>
    </li>
    </>
    :
    <>
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
    </>
    }
    </ul>
    </div>
    </div>
  )
}

export default Navbar