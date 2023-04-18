import React, { useEffect, useState } from "react";
import DisplayArea from "./DisplayArea";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [year,setYear]=useState(new Date().getFullYear())
  // const [month,setMonth]=useState(new Date().getMonth())
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("12:00 AM");
  const [inputValue, setInputValue] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);


  const handleOpen = () => {
    setOpen(true);
    setIsInputClicked(true);
  };
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCurrentDate("");
      setTime("");
      setInputValue("");
    } else {
      const dateTime = new Date(Date.parse(value));
      if (!isNaN(dateTime)) {
        setCurrentDate(dateTime);
        const formattedTime = dateTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric"
        });
        setTime(formattedTime);
        setInputValue(
          `${dateTime.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
          })} ${formattedTime}`
        );
      }
    }
  };

  useEffect(() => {
    if (currentDate && time) {
      let formattedValue = `${currentDate.toDateString()} ${time}`;
      setInputValue(formattedValue);
    }
  }, [currentDate, time]);

  // console.log(currentDate)
  const inputDisplayValue = isInputClicked ? inputValue : "";
  
  return (
    <div className="main">
      {/* <div className="input-field"> */}
        <input
          onClick={handleOpen}
          readOnly
          placeholder="Select a date and time"
          value={inputDisplayValue}
          onChange={handleInputChange}
          className="input"
        />
      {/* </div> */}
      {open && (
        <DisplayArea
          autoFocus
          open={open}
          setOpen={setOpen}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          time={time}
          setTime={setTime}
          showTimer={true}
          listIntervals={5}
          timeInterval={60}
          selectedColor="forest green"
        />
      )}
      <p className="center">below display area</p>
      <p className="center">below display area</p>
      <p className="center">below display area</p>
      <p className="center">below display area</p>
      <p className="center">below display area</p>
    </div>
  );
};

export default Main;
