import React, { useEffect, useState, useRef } from "react";
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
  const [isValidDateTime, setIsValidDateTime] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

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
    } else {
      setInputValue(value);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      const inputDate = inputValue.trim();
      let dateTime;
      if (/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(inputDate)) {
        const [day, month, year] = inputDate.split(/[/|-]/);
        dateTime = new Date(`${month}/${day}/${year}`);
      } else {
        dateTime = new Date(Date.parse(inputDate));
      }
      // const dateTime = new Date(Date.parse(inputValue));
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
        setIsValidDateTime(true);
        setShowTooltip(false);
      } else {
        setIsValidDateTime(false);
        setShowTooltip(true);
      }
    }
  };

  useEffect(() => {
    if (currentDate && time) {
      let formattedValue = `${currentDate.toDateString()} ${time}`;
      setInputValue(formattedValue);
      setIsValidDateTime(true);
    }
  }, [currentDate, time]);

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    })
  }, [tooltipRef]);

  const handleSelectOutside = () => {
    if (inputValue.trim() !== "") {
      handleInputKeyPress({ key: 'Enter' });
    }
  };

  // console.log(currentDate)
  const inputDisplayValue = isInputClicked ? inputValue : "";

  return (
    <div className="main">
      <input
        onClick={handleOpen}
        placeholder={placeholder}
        value={inputDisplayValue}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyPress}
        onKeyDown={handleKeyDown}
        onBlur={handleSelectOutside}
        className="input "
      // title={isValidDateTime ? "" : "Invalid date time value"}

      />
      {!isValidDateTime && showTooltip && (
        <div ref={tooltipRef} className="error-tooltip">
          Invalid date time value
        </div>
      )}

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
        // handleInputChange={handleInputChange}
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
