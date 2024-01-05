import React from 'react'
import './navbar.css'
import logo from '../../assets/images/TunnelCraft_white.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo}></img>
            <ul>
                <li><a href="#" className='hover-link link'>À propos</a></li>
                <li><a href="#" className='hover-link1 link'>Aide</a></li>
                <li><a href="#" className='hover-link2 link '>Contact</a></li>
                <li><a href="/connection" className='connection-btn'>Connexion</a></li>
                <li><a href="/connection" className='signup-btn'>Inscription</a></li>
            </ul>
        </nav>  
    </div>
  )
}

export default Navbar