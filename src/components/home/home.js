import './home.scss'

import proposalJ from '../../images/homepage.jpg'
import proposalW from '../../images/proposal.webp'
import ourAdventure from '../../images/Adventure.png'

export default function Home () {
  return ( 
    <div className="home">
      <div className="homeText"> 
        <picture>
        <img width="400" id="ouradventure" src={ourAdventure} alt="Alt Text!" />
      </picture>
      <h1>Alex and Karla</h1>
      <h3>July 16, 2022</h3>
      <h3>Rush City, MN</h3>
      </div>
      <picture>
        <img id="homepic" src={proposalJ} alt="Alt Text!" />
      </picture>
    </div>
   )
}