import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DisplayArea from "./DisplayArea";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleOpen = () => { 
    setOpen(!open);
  };

  return (
    <div className="main">
      <div>
        <input
          onClick={handleOpen}
          placeholder="When does the filiming starts ?" value={date.toDateString()}/>
      </div>
      {open ? <DisplayArea date={date} setDate={setDate} /> : <></>}
    </div>
  );
};

export default Main;
