import React from "react";
import AppHeader from "../components/other/AppHeader";
import Calendar from "../components/other/TrainingsCalendar";

const CalendarView = (props) => {

  return (
    <div>
      <AppHeader/>
      <Calendar />
    </div>
  )
}

export default CalendarView;

