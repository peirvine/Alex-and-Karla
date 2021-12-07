import './home.scss'

import proposalJ from '../../images/proposal.jpg'
import proposalW from '../../images/proposal.webp'

export default function Home () {
  return ( 
    <picture>
      <source srcset={proposalW} type="image/webp" />
      <source srcset={proposalJ} type="image/jpeg" /> 
      <img src={proposalJ} alt="Alt Text!" />
    </picture>
   )
}