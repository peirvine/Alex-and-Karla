import React from "react"
import WeddingSplit from './weddingSplit'

import './weddingParty.scss'
import tgt from "../../images/registry/target.png"
import daddyBezos from "../../images/registry/amazon.png"


export default function WeddingParty () {
  const group = {
    brideName: "ELLEN AAS - CO-MAID OF HONOR",
    brideImage: daddyBezos,
    brideBlurb: "Hi! My name is Ellen and I met Elise during our Chem E classes at the U! \n I grew up in Fargo, ND and was raised to love UND (#siouxforever) and despise the Gophers, so it’s a miracle I ended up at the U of M in the first place. But I am so lucky I did (although I questioned that during some of the tougher exams). Through our Chem E classes, Elise quickly became a best friend. We leaned on each other through triumphs and low times, and the resulting bond will always be unbreakable. \n I don’t think I was supposed to know how and when Peter was going to pop the question, but I did, and this is one of the only secrets kept from Elise. That day in Ireland, I spent way too much time hoping the wind wouldn’t take the ring over the Cliffs of Moher. Thank goodness it did not and that someone else who was not happy crying was in charge of video. \n In all, Elise is the best friend who I have endured some of the toughest moments of our lives with and I am now beyond excited to be able to stand up next to her during one of her best moments. So happy for Elise and Peter and ready to dance the night away on their big day!",
    groomName: "ALEX OELKE - BEST MAN",
    groomImage: tgt,
    groomBlurb: "I\'ve known Peter since our Freshman year in college when he came to the door looking to have dinner with my roommate Lane, but I sufficed since he was gone. We quickly bonded over our talking about our time in 4-H and FIRST robotics. Our Junior Year of college we shared an apartment where we enjoyed gaming and occasionally watching shows with Peter and Elise like Say Yes to the Dress. In the last few years we've gone scuba diving, brewed some beer, gone hunting, and done a triathlon together.",
  }
  return (
    <div className="wrapper">
      <h2>
        Wedding Party
        <WeddingSplit {...group} />
        <WeddingSplit {...group} />
        <WeddingSplit {...group} />
        <WeddingSplit {...group} />
        <WeddingSplit {...group} />
        <WeddingSplit {...group} />
      </h2>
    </div>
  )
}
