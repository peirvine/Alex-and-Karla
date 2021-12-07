import React from "react";
import ScheduleEvent from "./scheduleevent"

import './schedule.scss'

export default function Schedule() {
  const ceremony= {
    title: 'Ceremony',
    date: "Saturday, July 16th, 2022",
    time: "TBD",
    body: "Creekside Farm Weddings & Events",
    address1: '8555 Rushseba Trail',
    address2: 'Rush City, MN 55069',
    addressURL: 'https://g.page/creekside-farm-weddings-events?share'
  }

  const reception= {
    title: 'Reception',
    date: "Saturday, July 16th, 2022",
    groupTime: {
      cocktailHour: "TBD",
      dinner: "TBD",
      dancing: "TBD"
    },
    body: "Creekside Farm Weddings & Events",
    address1: '8555 Rushseba Trail',
    address2: 'Rush City, MN 55069',
    addressURL: 'https://g.page/creekside-farm-weddings-events?share'
  }

  return (
    <div className="wrapper">
      <h2>
        Schedule
      </h2>
      <p id="subhead">
        Here's what to expect during our wedding weekend. We can't wait to celebrate with you!
      </p>

      <ScheduleEvent {...ceremony}/>
      <ScheduleEvent {...reception}/>
    </div>
  )
}