import React from 'react';  

export default function BWFCalendar(props) {
  var calendar = props.calendar
  var tourney = <div></div>
  
  try {
    console.log(calendar)
    var tourney = calendar.map((tourney, i) => (
      <div key = {i}> 
        <div className="month">
          <div className="tourneyname">
            <img src={require("../images/" + tourney.Logo)} />
          </div>
          <div className="tourneydetails">
            <h2>{tourney.name}</h2>
            <h3>{tourney.date}</h3> 
            <h4>{tourney.prize}</h4>
          </div>
          <div className="tourneytype">
            <div className="HSBC">
              <img src={require("../images/" + tourney.HSBC)} />
            </div>
            <div className="tourneycountry">
              <img src={require("../images/" + tourney.Flag)} />
              <div>
                {tourney.Location[0]}
                <br></br>{tourney.Location[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  } catch (error) {
    console.log("error")
  }

  return (
    <div className="BWFcalendar">
      <h1>2022 World Tour Calendar</h1>
      {tourney}
    </div>
  )
}