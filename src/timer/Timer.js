import React, { useState, useEffect } from "react";
import './timer.css'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


const Timer = (props) => {

  const { time, setTime, selectedTime, numIntervals = 5, color } = props;
  const [index, setIndex] = useState(() => {
    const selectedIndex = time.indexOf(selectedTime);
    return selectedIndex === -1 ? 0 : selectedIndex;
  });

  useEffect(() => {
    const selectedIndex = time.indexOf(selectedTime);
    if (selectedIndex !== -1) {
      setIndex(selectedIndex);
    }
  }, [selectedTime]);


  const increaseScroll = () => {
    //setIndex((index + 1) % time.length);
    if (index === time.length - numIntervals) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const decreaseScroll = () => {
    //   setIndex((index - 1 + time.length) % time.length);
    if (index === 0) {
      setIndex(time.length - numIntervals);
    } else {
      setIndex(index - 1);
    }
  };

  const handleTimeSelection = (selectedTime) => {
    setTime(selectedTime);
  };

  const isLastTimeValue = time[time.length - 1] === "23:59";
  const circularTime = isLastTimeValue ? ["00:00", ...time, "00:00"] : time;

  if (index + numIntervals > circularTime.length) {
    const remaining = index + numIntervals - circularTime.length;
    circularTime.push(...circularTime.slice(0, remaining));
  }

  return (
    <div className="timer">
      <button onClick={increaseScroll}><BsChevronUp /></button>
      <div className="list">
        {circularTime.slice(index, index + numIntervals).map((title) => (
          <p key={title} onClick={() => handleTimeSelection(title)}
            className={selectedTime === title ? "selected" : ""}
            style={{ backgroundColor: selectedTime === title ? color : "" }}
          >{title}</p>
        ))}
      </div>
      <button onClick={decreaseScroll}><BsChevronDown /></button>
    </div>
  );
};

export default Timer;

