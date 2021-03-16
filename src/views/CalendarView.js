import React from "react";
import AppHeader from "../components/general/AppHeader";
import Calendar from "../components/general/TrainingsCalendar";

const CalendarView = (props) => {

  return (
    <div>
      <AppHeader/>
      <Calendar />
    </div>
  )
}

export default CalendarView;

