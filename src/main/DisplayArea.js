import React from "react";
import Calender from "../calender/Calender";
import { useState } from "react";
import Timer from "../timer/Timer";

const DisplayArea = (props) => {

 
  const {  time, setTime,showTimer,color ,numIntervals } = props;
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 1) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
      times.push(time);
    }
  }
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="display">
      <span className="display1">
        <Calender currentDate ={currentDate} setCurrentDate ={setCurrentDate} selectedDate ={selectedDate} setSelectedDate = {setSelectedDate} />
       {showTimer ?<Timer time={times} selectedTime={time} setTime={setTime} numIntervals={numIntervals} color={color} />:null} 
      </span>
    </div>
  );
};

export default DisplayArea;
