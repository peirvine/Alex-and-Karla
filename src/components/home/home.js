import './home.scss'

import proposalJ from '../../images/homepage.jpg'
import ourAdventure from '../../images/Adventure.png'

export default function Home () {
  return (
    <div className="home">
      <div id="homeText">
        <a href="/">
          <img id="ouradventure" src={ourAdventure} alt="Alex and Karla - Our Adventure Begins" />
        </a>
        <h1>Alex and Karla</h1>
        <h2>Rush City, MN</h2>
        <h3>July 16, 2022</h3>
        <div id="rsvpHold">
          <a id="homeRsvp" href="https://alexandkarla.anrsvp.com/" rel="noreferrer" target="_blank">RSVP</a>
        </div>
      </div>
      <img id="homepic" src={proposalJ} alt="proposal" />
    </div>
  )
}
