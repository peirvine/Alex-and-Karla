import Split from '../split/split'

import './story.scss'

export default function Story () {
  const howWeMet= {
    title: 'How We Met',
    date: "Through much discussion, it was probably 2009",
    body: "Karla and Alex met many years ago when they were in 4H. They both showed poultry; Alex showed chickens and Karla showed ducks. Though they didn’t really get to know each other until they joined the poultry knowledge quiz bowl team in 2009. Many weeknights and weekends were spent studying and learning about all things bird related. Through this avenue, their friendship formed. Each summer Karla and Alex would spend many days together at the county and state fair. As they grew up, their relationship grew as well. The summer of 2014 brought a change in the relationship, from close friends to dating. They were texting each other every day that they were apart. On July 24th, Alex had picked Karla up in his pickup and they drove down to Olmsted and Faribault county fairs. The night was spent laughing, sharing food, and enjoying each other’s company. On their drive back to the cities, Karla decided the question needed to be asked: “So, do you like like me?” To which Alex replied, “Yes.” Karla then said, “Good, because I like like you.” There was some silence, then Alex reached his hand across to hold hers. Karla smiled then asked, “So, would you mind being my boyfriend?” To which Alex replied, “If you don’t mind being my girlfriend.” Thus began the relationship of Karla and Alex. Two people with a love of adventure and exploring everything life has to offer. They’ve travelled near and far together and learned more about each other each day. And hope to continue to do so for many many years to come.",
  }

  const proposal= {
    title: 'The Proposal',
    date: "June 24th, 2021",
    body: "After almost 7 years together, Alex and Karla knew that they would be spending their lives together. They were considered family at any holiday gathering and in any family photo. The year 2020 saw them buy a house together and welcome a spunky chocolate lab puppy into their lives. June of 2021 found them planning a boundary waters trip. They had done a trip to the boundary waters the previous year and were looking forward to another. After extensive planning and packing over a number of days they had it whittled down to the absolute bare minimum. The morning of their first day, they loaded up their canoe at the launch site and the outfitter said, “Good luck out there, it’s very windy.” And he wasn’t wrong. What was supposed to be a 6 hour journey of canoeing and portaging turned into 10. After fighting the wind and being utterly exhausted, they finally reached a campsite for the night. There they promised each other that tomorrow will be a better day. When they awoke, their promise was fulfilled, for the water was calm as glass. Alex said, “Let's go to Eddy Falls today.” It was a beautiful day, such a difference from the previous. Upon reaching the waterfall, they beached the canoe and started on the trail to the waterfall. The Falls were beautiful and they sat on a downed tree just taking in the awe of the scenery. They were completely alone with just the sound of rushing water and nature surrounding them. After some time, Alex hopped off the log and climbed some rocks with a smirk on his face and his hand in his pocket. Karla was a little unsure what he was doing but started to have an inkling. He paused in front of her on some rocks and said, “I have a question for you.” Karla, who couldn’t hear what he said over the sound of the rushing water, appropriately responded, “what?” To which Alex pulled his hand out of his pocket, producing a beautiful ring, bent down on one knee and asked, “will you marry me?” To which Karla jumped off the log and scrambled up the rocks to him and exclaimed, “oh my god, of course yes!” The rest of the trip was spent enjoying each other’s company and engagement before rejoining the rest of civilization.",
  }

  return (
    <div id="story">
      <Split {...howWeMet}/>
      <Split {...proposal}/>
    </div>
   )
}