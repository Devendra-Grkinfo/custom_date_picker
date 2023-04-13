import React, { useRef } from "react";
import Calender from "../calender/Calender";
import Timer from "../timer/Timer";
import { useEffect } from "react";

const DisplayArea = (props) => {

  let displayRef=useRef()
  useEffect(()=>{
    document.addEventListener('mousedown',(event)=>{
      if(displayRef.current && !displayRef.current.contains(event.target)){
        setOpen(!open)
      }
    })
  })
 
  const {currentDate,setCurrentDate,selectedDate,setSelectedDate,time,setTime,showTimer,selectedColor,numIntervals,setOpen,open } = props;
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 1) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
      times.push(time);
    }
  }

  return (
    <div className="display"  ref={displayRef}>
      <Calender currentDate ={currentDate} setCurrentDate ={setCurrentDate} selectedDate ={selectedDate} setSelectedDate = {setSelectedDate} />
       {showTimer ?<Timer time={times} selectedTime={time} setTime={setTime} numIntervals={numIntervals} selectedColor={selectedColor} />:null} 
    </div>
  );
};

export default DisplayArea;
