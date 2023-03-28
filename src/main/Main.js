import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DisplayArea from "./DisplayArea";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00 AM");

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
      {open ? <DisplayArea date={date} setDate={setDate} time={time} setTime={setTime} /> : null}
    </div>
  );
};

export default Main;


// value={date.toDateString()}