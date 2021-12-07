import React from "react";

import './registry.scss'
import tgt from "../../images/registry/target.png"
import daddyBezos from "../../images/registry/amazon.png"

export default function Registry() {
  return (
    <div className="wrapper">
      <h2> Gift Registries </h2>

      <div id="images">
        <a href="https://www.target.com/gift-registry/gift-giver?registryId=2ab7ce50-07a5-11ec-9a3b-89493f28ec2f&type=WEDDING" target="_blank" rel="noreferrer"><img src={tgt} alt="crate&barrel" /></a>
        <a href="https://www.amazon.com" target="_blank" rel="noreferrer"><img src={daddyBezos} alt="macys" /></a>
      </div>
    </div>
  )
}