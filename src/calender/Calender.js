import React from "react";
import { useState } from "react";
import {format , startOfWeek , addDays} from "date-fns";
import './calender.css'
import Header from "./components/Header";
import DaysOfWeek from "./components/DaysOfWeek";
import Cells from "./components/Cells";

const Calender = () => {

const [currentDate, setCurrentDate] = useState(new Date())
const [selectedDate, setSelectedDate] = useState(new Date())


//  const daysOfWeek = () => {
//   const dateFormat = "E";
//   const days = [];
//   let startDate = startOfWeek(currentDate);
//      for (let i = 0; i < 7; i++) {
//         days.push(
//            <div key={i}>
//            {format(addDays(startDate, i), dateFormat)}
//            </div>
//         );
//      }
//      return <div className="days">{days}</div>;
//   };

  return (
    <div className="calendar">
    <div><Header currentDate={currentDate} setCurrentDate={setCurrentDate}   /></div>
    <div><DaysOfWeek currentDate={currentDate} setCurrentDate={setCurrentDate}   /></div>
    <div><Cells  currentDate={currentDate} setCurrentDate={setCurrentDate}    selectedDate={selectedDate} setSelectedDate={setSelectedDate} /></div>
    </div>
  );
};

export default Calender;
