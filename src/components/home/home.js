import './home.scss'

import proposalJ from '../../images/homepage.jpg'
import ourAdventure from '../../images/Adventure.png'

export default function Home () {
  return ( 
    <div className="home">
      <div id="homeText"> 
        <a href="/">
          <img width="400" id="ouradventure" src={ourAdventure} alt="Alt Text!" />
        </a>
        <h1>Alex and Karla</h1>
        <h2>Rush City, MN</h2>
        <h3>July 16, 2022</h3>
      </div>
      <img id="homepic" src={proposalJ} alt="Alt Text!" />
    </div>
   )
}