import './nav.scss'
import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink, useLocation  } from "react-router-dom"

import ourAdventure from '../../images/Adventure.png'

export default function Nav () {
  const [ openNav, setOpenNav ] = useState()

  return (
    <div id="nav">
      <nav id="desktopNav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/story" activeClassName="selected">Our Story</NavLink>
          </li>
          <li>
            <NavLink exact to="/photos" activeClassName="selected">Photos</NavLink>
          </li>
          <li>
            <NavLink exact to="/schedule" activeClassName="selected">Schedule</NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/travel" activeClassName="selected">Travel</NavLink>
          </li> */}
          <li>
            <NavLink exact to="/registry" activeClassName="selected">Registries</NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/wedding-party" activeClassName="selected">Wedding Party</NavLink>
          </li> */}
          {/* <li>
            <a href="https://google.com" rel="noreferrer" id="rsvp" target="_blank">RSVP</a>
          </li>  */}
        </ul>
      </nav>
      <nav id="mobileNav">
        <Menu right isOpen={openNav} onOpen={() => setOpenNav(true)} onClose={() => setOpenNav(false)}>
          <NavLink exact to="/" activeClassName="selected" onClick={() => setOpenNav(false)}>Home</NavLink>
          <NavLink to="/story" activeClassName="selected"onClick={() => setOpenNav(false)}>Our Story</NavLink>
          <NavLink to="/photos" activeClassName="selected" onClick={() => setOpenNav(false)}>Photos</NavLink>
          <NavLink to="/schedule" activeClassName="selected" onClick={() => setOpenNav(false)}>Schedule</NavLink>
          <NavLink to="/registry" activeClassName="selected" onClick={() => setOpenNav(false)}>Registries</NavLink>
        </Menu>
        <div id="mobileLogo">
          <NavLink to="/"><img src={ourAdventure} alt="Alex and Karla - Our Adventure Begins" /></NavLink>
        </div>
      </nav>
    </div>
  )
}