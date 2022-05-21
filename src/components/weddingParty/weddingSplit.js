import React from "react";

import './weddingParty.scss'

export default function WeddingSplit(payload) {
  return (
    <div className="weddingSplit">
      <div className="bride">
        <div className="brideImage">
          <img src={payload.brideImage} alt="bridesmaid" />
        </div>
        <div className="brideBody">
          <h3>{payload.brideName}</h3>
          <p>{payload.brideBlurb}</p>
        </div>
      </div>
      <div className="groom">
        <div className="groomImage">
          <img src={payload.groomImage} alt="groomsmen" />
        </div>
        <div className="groomBody">
          <h3>{payload.groomName}</h3>
          <p>{payload.groomBlurb}</p>
        </div>
      </div>
    </div>
  )
}
