import React from "react"
import WeddingSplit from './weddingSplit'

import './weddingParty.scss'
import { weddingParty } from './weddingPeople'


export default function WeddingParty () {
  return (
    <div className="wrapper">
      <h2>
        Wedding Party
        {weddingParty.map(x => (
          <WeddingSplit {...x} />
        ))}

      </h2>
    </div>
  )
}
