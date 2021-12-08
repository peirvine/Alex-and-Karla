import './home.scss'

import proposalJ from '../../images/homepage.jpg'
import proposalW from '../../images/proposal.webp'

export default function Home () {
  return ( 
    <div className="home">
      <div className="homeText">
        <h1>Alex and Karla</h1>
        <h2>RSVP</h2>
      </div>
      <picture>
        {/* <source srcset={proposalW} type="image/webp" />
        <source srcset={proposalJ} type="image/jpeg" />  */}
        <img id="homepic" src={proposalJ} alt="Alt Text!" />
      </picture>
    </div>
   )
}