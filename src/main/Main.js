import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DisplayArea from "./DisplayArea";

const Main = () => {
  const initialTime = "00:00 AM";
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(initialTime);

  const handleOpen = () => {
    setOpen(!open);
  };


  return (
    <div className="main">
      <div>
        <input
          onClick={handleOpen}
          placeholder="Enter date and time "
          value={date.toDateString() + " " + time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      {open ? <DisplayArea date={date} setDate={setDate} time={time} setTime={setTime} showTimer={true} numIntervals={5} color='forest green' /> : null}
    </div>
  );
};

export default Main;

