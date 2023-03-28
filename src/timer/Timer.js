import React, { useState  } from "react";
import './timer.css'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


const Timer = (props) => {

  const { time, setTime,selectedTime, numIntervals = 4 } = props;
  const [index, setIndex] = useState(0);

 

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

  return (
    <div className="timer">
      <button onClick={increaseScroll}><BsChevronUp /></button>
      <div className="list">
        {circularTime.slice(index, index + numIntervals).map((title) => (
          <p key={title} onClick={() => handleTimeSelection(title)}
           className={selectedTime === title ? "selected" : ""}
          >{title}</p>
        ))}
      </div>
      <button onClick={decreaseScroll}><BsChevronDown /></button>
    </div>
  );
};

export default Timer;

