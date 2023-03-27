import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import './calender.css'

const Calender = ({date,setDate}) => {

  return (
    <div className="calender">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      {/* <div className="text-center">Selected date: {date.toDateString()}</div> */}
    </div>
  );
};

export default Calender;
