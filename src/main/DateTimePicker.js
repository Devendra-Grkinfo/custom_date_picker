import React, { useEffect, useState, useRef } from "react";
import DisplayArea from "./DisplayArea";
import { useSelector, useDispatch } from 'react-redux';
import { updateState } from "../Store/dateTimePickerSlice";
import { setIsInputClicked, setInputValue, setIsValidDateTime, setShowTooltip, setOpen } from '../Store/dateTimePickerSlice';

const DateTimePicker = ({ showTimer, selectedColor, listIntervals, timeInterval, placeholder }) => {
  const dispatch = useDispatch();

  const { isInputClicked, inputValue, isValidDateTime, showTooltip, open, time } = useSelector((state) => state.dateTimePicker);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [time, setTime] = useState("12:00 AM");
  // const [open, setOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  // const [isInputClicked, setIsInputClicked] = useState(false);
  // const [isValidDateTime, setIsValidDateTime] = useState(true);
  // const [showTooltip, setShowTooltip] = useState(false);
  // const [tooltipPosition, setTooltipPosition] = useState("bottom")

  const tooltipRef = useRef(null);
  const inputRef = useRef(null);

  const handleOpen = () => {
    // dispatch(setOpen(true));
    // dispatch(setIsInputClicked(true));
    dispatch(updateState({ open: true }));
    dispatch(updateState({ isInputClicked: true }));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCurrentDate(new Date());
      // setTime("");
      // dispatch(setInputValue(""));
      dispatch(updateState({ time: "" }))
      dispatch(updateState({ inputValue: "" }));
    } else {
      // dispatch(setInputValue(value));
      dispatch(updateState({ inputValue: value }));
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
        // setTime(formattedTime);
        // setSelectedDate(dateTime);
        // setInputValue(
        //   `${dateTime.toLocaleDateString("en-US", {
        //     day: "numeric",
        //     month: "numeric",
        //     year: "numeric"
        //   })} ${formattedTime}`
        // );
        dispatch(updateState({ time: formattedTime }))
        dispatch(updateState({ isValidDateTime: true }));
        dispatch(updateState({ showTooltip: false }));
      } else {
        // dispatch(setIsValidDateTime(false));
        // dispatch(setShowTooltip(true));
        dispatch(updateState({ isValidDateTime: false }));
        dispatch(updateState({ showTooltip: true }));
      }
    }
  };
  useEffect(() => {
    if (currentDate && time) {
      let formattedValue = `${currentDate.toDateString()} ${time}`;
      // dispatch(setInputValue(formattedValue));
      // dispatch(setIsValidDateTime(true));
      dispatch(updateState({ inputValue: formattedValue }));
      dispatch(updateState({ isValidDateTime: true }));
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

  const handleInputFocus = () => {
    // dispatch(setShowTooltip(false));
    dispatch(updateState({ showTooltip: false }));
  };

  // useEffect(() => {
  //   if (tooltipRef.current) {
  //     const inputRect = tooltipRef.current.getBoundingClientRect();
  //     const spaceAbove = inputRect.top;
  //     const spaceBelow = window.innerHeight - inputRect.bottom;
  //     const spaceLeft = inputRect.left;
  //     const spaceRight = window.innerWidth - inputRect.right;
  //     const tooltipHeight = tooltipRef.current.offsetHeight;
  //     const tooltipWidth = tooltipRef.current.offsetWidth;
  //     let position = "bottom";
  //     if (spaceAbove < tooltipHeight && spaceBelow > tooltipHeight) {
  //       position = "top";
  //     } else if (spaceLeft < tooltipWidth && spaceRight > tooltipWidth) {
  //       position = "right";
  //     } else if (spaceRight < tooltipWidth && spaceLeft > tooltipWidth) {
  //       position = "left";
  //     }
  //     setTooltipPosition(position);
  //   }
  // }, [tooltipRef.current]);

  // useEffect(() => {
  //   window.addEventListener("click", (event) => {
  //     if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
  //       setShowTooltip(false);
  //     }
  //   })
  // }, [tooltipRef]);

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
        ref={inputRef}
        onClick={handleOpen}
        placeholder={placeholder}
        value={inputDisplayValue}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyPress}
        onKeyDown={handleKeyDown}
        onBlur={handleSelectOutside}
        onFocus={handleInputFocus}
        className="input "
        title={isValidDateTime ? "" : "Invalid date time value"}

      />
      {!isValidDateTime && showTooltip && (
        <div ref={tooltipRef} className="error-tooltip" >
          Invalid date time value
        </div>
      )}

      {open && (
        <DisplayArea
          autoFocus
          open={open}
          // setOpen={setOpen}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          time={time}
          // setTime={setTime}
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
