import React from "react";

import './schedule.scss'

export default function ScheduleEvent(payload) {
  return (
    <div className="scheduleEvent">
      <div className="eventLeft">
        <h3 className="eventTitle">{payload.title}</h3>
        <div className="eventDate">
          {payload.date}
        </div>
        <div className="eventTime">
          {payload.time ? payload.time : (
            <div id="eventGroupTime">
              <p>Ceremony: { payload.groupTime.ceremony}</p>
              <p>Cocktail Hour: { payload.groupTime.cocktailHour} </p>
              <p>Dinner: { payload.groupTime.dinner} </p>
              <p>Dancing: { payload.groupTime.dancing} </p>
            </div>
          )}
        </div>
      </div>
      <div className="eventRight">
        <div className="eventLocation">
          <h3 className="eventBody">{payload.body}</h3>
          <div className="eventAddress">
            <p>{payload.address1} <br />
            {payload.address2}</p>
          </div>
        </div>
        <div className="eventButtons">
          <a
            href={payload.addressURL}
            target="_blank"
            rel="noreferrer"
            className="eventLink"
          >
            Map
          </a>
        </div>
      </div>
    </div>
  )
}