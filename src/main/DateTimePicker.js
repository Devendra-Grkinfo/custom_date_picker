import React, { useEffect, useState } from "react";
import DisplayArea from "./DisplayArea";

const DateTimePicker = ({ showTimer, selectedColor, listIntervals, timeInterval, placeholder }) => {
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
      setCurrentDate(new Date());
      setTime("");
      setInputValue("");
    } else if (value.length < inputValue.length) {
      setInputValue(value);
      setCurrentDate(new Date());
      setTime("");
    } else if (value.length < 18) {
      setInputValue(value);
    } else {
      const dateTime = new Date(Date.parse(value));
      if (!isNaN(dateTime)) {
        setCurrentDate(dateTime);
        const formattedTime = new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit"
        }).format(dateTime);
        setTime(formattedTime);
        setSelectedDate(dateTime);
        setInputValue(
          `${dateTime.toLocaleDateString("en-US", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
          })} ${formattedTime}`
        );
      } else {
        setInputValue(value);
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
        placeholder={placeholder}
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
          showTimer={showTimer}
          listIntervals={listIntervals}
          timeInterval={timeInterval}
          selectedColor={selectedColor}
          handleInputChange={handleInputChange}
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

export default DateTimePicker;
