import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DisplayArea from "./DisplayArea";

const Main = () => {
  
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [time, setTime] = useState("00:00 AM");

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="main">
      <div>
        <input
          onClick={handleOpen} readOnly
          placeholder="Enter date and time "
          value={currentDate.toDateString() + " " + time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      {open && (
        <div onMouseLeave={() => setOpen(false)}>
          <DisplayArea
            currentDate ={currentDate} 
            setCurrentDate ={setCurrentDate} 
            selectedDate ={selectedDate} 
            setSelectedDate = {setSelectedDate}
            time={time}
            setTime={setTime}
            showTimer={true}
            numIntervals={5}
            selectedColor="forest green"
          />
        </div>
      )}
</div>
  );
};

export default Main;

