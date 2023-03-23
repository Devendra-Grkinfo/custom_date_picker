import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "./Calender";
import DisplayArea from "./DisplayArea";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="main">
      <div>
        <input
          onClick={handleOpen}
          placeholder="When does the filiming starts ?"
        />
      </div>
      {open ? <DisplayArea /> : <></>}
    </div>
  );
};

export default Main;
