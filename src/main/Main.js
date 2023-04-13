import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DisplayArea from "./DisplayArea";

const Main = () => {
  
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date())
  // const [year,setYear]=useState(new Date().getFullYear())
  // const [month,setMonth]=useState(new Date().getMonth())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [time, setTime] = useState("00:00 AM");

  const handleOpen = () => {
    setOpen(!open);
  };

// console.log(currentDate)
  return (
    <div className="main">
      <div>
        <input
          onClick={handleOpen} readOnly
          placeholder="Enter date and time "
          value={currentDate.toDateString()+ " " + time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      {open && (
        < >
          <DisplayArea
          autoFocus
          open={open}
          setOpen={setOpen}
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
        </>
      )}
      <div>
      <p>below display area</p>
          <p>below display area</p>
          <p>below display area</p>
          <p>below display area</p>
          <p>below display area</p>
      </div>
</div>
  );
};

export default Main;

