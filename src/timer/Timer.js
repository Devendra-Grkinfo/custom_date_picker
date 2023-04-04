import React, { useState, useEffect, useRef } from "react";
import './timer.css'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


const Timer = (props) => {
  const listRef = useRef(null);
  const { time, setTime, selectedTime, numIntervals = 5, selectedColor } = props;

  const [index, setIndex] = useState(() => {
    const selectedIndex = time.indexOf(selectedTime);
    return selectedIndex === -1 ? 0 : selectedIndex;
  });
  const [prevMouseY, setPrevMouseY] = useState(null);

  useEffect(() => {
    const selectedIndex = time.indexOf(selectedTime);
    if (selectedIndex !== -1) {
      setIndex(selectedIndex);
    }
  }, [selectedTime, time]);

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

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY  ;
    listRef.current.scroll += delta;
  };

  const handleMouseMove = (e) => {
    if (!listRef.current) return;

    const { clientY } = e;
    const { top, height } = listRef.current.getBoundingClientRect();
    const scrollDelta = (clientY - top) / height;

    if (prevMouseY !== null) {
      const scrollDirection = (scrollDelta - prevMouseY);
      if (scrollDirection < 0) {
        setTimeout(() => decreaseScroll(), 200);
      } else {
        setTimeout(() => increaseScroll(), 200);
      }
    }
    setPrevMouseY(scrollDelta);
  };
  
 
  const isLastTimeValue = time[time.length - 1] === "23:59";
  const circularTime = isLastTimeValue ? ["00:00", ...time, "00:00"] : time;

  if (index + numIntervals > circularTime.length) {
    const remaining = index + numIntervals - circularTime.length;
    circularTime.push(...circularTime.slice(0, remaining));
  }

  return (
    <div className="timer" >
      <div className="head">
        <div >
          <button className="button" onClick={increaseScroll}><BsChevronUp />
          </button>
        </div>
        <div className="list" ref={listRef} onWheel={handleWheel} onMouseMove={handleMouseMove}  >
          {circularTime.slice(index, index + numIntervals).map((time) => (
            <p key={time} onClick={() => handleTimeSelection(time)}
              className={selectedTime === time ? "selected" : ""}
              style={{ backgroundColor: selectedTime === time ? selectedColor : "" }}
            >{time}</p>
          ))}
        </div>
        <div >
          <button className="button" onClick={decreaseScroll}><BsChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

