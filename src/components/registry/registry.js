import React from "react";

import './registry.scss'
import myR from "../../images/registry/myRegistry.png"

export default function Registry() {
  return (
    <div className="wrapper">
      <h2> Gift Registry </h2>

      <div id="images">
        <a href="https://www.myregistry.com/wedding-registry/karla-koppendrayer-and-alex-oelke-white-bear-lake-mn/3308373/giftlist" target="_blank" rel="noreferrer"><img src={myR} alt="myRegistry" /></a>
      </div>
    </div>
  )
}
