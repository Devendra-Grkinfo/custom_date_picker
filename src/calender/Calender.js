import React from "react";
import './calender.css'
import Header from "./components/Header";
import DateView from "./components/WeekDateView/DateView";

const Calender = (props) => {

const{currentDate,setCurrentDate,selectedDate,setSelectedDate}=props


  return (
    <div className="calendar">
    <Header currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    <DateView currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default Calender;
