import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calender">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
};

export default Calender;
