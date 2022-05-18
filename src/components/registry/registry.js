import React from "react";

import './registry.scss'
import tgt from "../../images/registry/target.png"
import myR from "../../images/registry/myRegistry.png"
import daddyBezos from "../../images/registry/amazon.png"

export default function Registry() {
  return (
    <div className="wrapper">
      <h2> Gift Registry </h2>

      <div id="images">
        {/* <a href="https://www.target.com/gift-registry/gift-giver?registryId=2ab7ce50-07a5-11ec-9a3b-89493f28ec2f&type=WEDDING" target="_blank" rel="noreferrer"><img src={tgt} alt="target" /></a>
        <a href="https://www.amazon.com/wedding/registry/24EVYPKKJGJF6" target="_blank" rel="noreferrer"><img src={daddyBezos} alt="amazon" /></a> */}
        <a href="https://www.myregistry.com/wedding-registry/karla-koppendrayer-and-alex-oelke-white-bear-lake-mn/3308373/giftlist" target="_blank" rel="noreferrer"><img src={myR} alt="myRegistry" /></a>
      </div>
    </div>
  )
}