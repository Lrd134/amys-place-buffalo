import React from 'react';

function Calendar() {

  return (
    <>
      <h1 className="calendar centered-text"> Events Calendar </h1>
      <iframe className="calendar" title="calendar" src="https://calendar.google.com/calendar/embed?src=38114785564497b520b52a53653e33eea10ff8662daaea26d2353830438efc92%40group.calendar.google.com&ctz=America%2FNew_York" style={{border: 0}} frameBorder="0" scrolling="no"></iframe>
      <br></br>
      <a 
      href="https://calendar.google.com/calendar/embed?src=38114785564497b520b52a53653e33eea10ff8662daaea26d2353830438efc92%40group.calendar.google.com&ctz=America%2FNew_York"
      alt="look at our google calendar">
        Google Calendar with Our Events
      </a>
    </>
  )
}

export default Calendar;