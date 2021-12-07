import React from "react"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"


import { photos } from "./photosList"

import "./photos.scss"

export default function Photos() {

  return (
    <>
      <div id="photosHeader">
        <h2>Photos</h2>
      </div>
      <div id="photosContent">
        <SimpleReactLightbox>
          <SRLWrapper>
            {photos.map(x => (
              <a href={x.src} data-attribute="SRL">
                <img src={x.src} alt={x.alt}/>
              </a>
            ))}
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
      <div id="photosCredit">
        <p>Photos by Veronica Barnes Photography</p>
      </div>
    </>
  )
}