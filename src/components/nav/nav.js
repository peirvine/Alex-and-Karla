import './nav.scss'
import { NavLink, useLocation  } from "react-router-dom"

export default function Nav () {
  return (
    <div id="nav">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/story" activeClassName="selected">Our Story</NavLink>
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
            <NavLink exact to="/photos" activeClassName="selected">Photos</NavLink>
          </li> */}
          <li>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
          </li>
          <li>
            <a href="https://google.com" rel="noreferrer" id="rsvp" target="_blank">RSVP</a>
          </li> 
        </ul>
      </nav>
    </div>
  )
}