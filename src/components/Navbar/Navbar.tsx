import React from 'react'
import './navbar.css'
import logox from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logox} alt="logo"></img>
            <ul>
                <li><a href="#Header" className='link'>Accueil</a></li>
                <li><a href="#Footer" className='link'>A propos</a></li>
                <li><a href="#Footer" className='link '>Contact</a></li>
                <li><a href="#Footer" className='link '>Services</a></li>
                <li><a href="/connection" className='connection-btn'>Connexion</a></li>
                           </ul>
        </nav>  
    </div>
  )
}

export default Navbar