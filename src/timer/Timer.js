import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import './timer.css'
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine} from "react-icons/ri";


const Timer = (props) => {
  const listRef = useRef(null);
  const { time, setTime, selectedTime, listIntervals = 5, selectedColor } = props;
  const selectedIndex = time.indexOf(selectedTime);

  const [index, setIndex] = useState(() => {
    return selectedIndex === -1 ? 0 : selectedIndex
  });

  const [prevMouseY, setPrevMouseY] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useLayoutEffect(() => {
    let selectedIndex = time.indexOf(selectedTime);
    // console.log(index);
    if (selectedIndex !== -1) {
      let centerIndex = Math.max(selectedIndex - Math.floor(listIntervals / 2));
      setIndex(centerIndex);
    }
  }, [selectedTime, time, listIntervals]);

  const increaseScroll = () => {
    if (index === time.length - 1) {
      setIndex(0);
    } else if (index === 0) {
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
    }
    setButtonClicked(true);
  };

  const decreaseScroll = () => {
    if (index === 0) {
      setIndex(time.length - 1);
    } else if (index === time.length - 1) {
      setIndex(index - 1);
    } else {
      setIndex(index - 1);
    }
    setButtonClicked(true);
  };

  useEffect(() => {
    if (buttonClicked) {
      let newSelectedTime = circularTime[Math.floor(listIntervals / 2)];
      if (newSelectedTime !== selectedTime) {
        setTime(newSelectedTime);
      }
      setButtonClicked(false);
    }
  }, [index]);

  const handleTimeSelection = (selectedTime) => {
    setTime(selectedTime);
    const selectedIndex = time.indexOf(selectedTime);
    const centerIndex = Math.max(selectedIndex - Math.floor(listIntervals / 2));
    setIndex(centerIndex);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (!dragging) {
      return;
    }
    const delta = e.deltaY;
    listRef.current.scroll += delta;
  };
  const handleStartDrag = (e) => {
    setPrevMouseY(e.clientY);
    setDragging(true);
  };

  const handleStopDrag = () => {
    setPrevMouseY(null);
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!listRef.current || !dragging) return;

    const { clientY } = e;
    const { top, height } = listRef.current.getBoundingClientRect();
    const scrollDelta = (clientY - top) / height;

    if (prevMouseY !== null) {
      const scrollDirection = (scrollDelta - prevMouseY);
      if (scrollDirection < 0) {
        decreaseScroll();
        // setTimeout(() => decreaseScroll(), 200);
      } else {
        increaseScroll();
        // setTimeout(() => increaseScroll(), 200);
      }
      // let newSelectedTime = circularTime[Math.floor(listIntervals / 2)];
      // if (newSelectedTime !== selectedTime) {
      //   setTime(newSelectedTime);
      // }
    }
    setPrevMouseY(scrollDelta);
  };
  const circularTime = [...time.slice(index), ...time.slice(0, index)];

  if (index + listIntervals > circularTime.length) {
    const remaining = index + listIntervals - circularTime.length;
    circularTime.push(...circularTime.slice(0, remaining));
  }
  // console.log(circularTime.length)

  return (
    <div className="timer" >
      <div className="head">
        <div >
          <button className="button" onClick={increaseScroll}><RiArrowUpSLine />
          </button>
        </div>
        <div className="list" ref={listRef} onWheel={handleWheel} onMouseMove={handleMouseMove} onMouseDown={handleStartDrag} onMouseUp={handleStopDrag} onMouseLeave={handleStopDrag} >
          {circularTime.slice(0, listIntervals).map((time, i) => (
            <p key={time} onClick={() => handleTimeSelection(time)}
              className={`list-item ${i === Math.floor(listIntervals / 2) ? "selected" : ""}`}
              style={{ backgroundColor: selectedTime === time ? selectedColor : "" }}
            >{time}</p>
          ))}
        </div>
        <div >
          <button className="button" onClick={decreaseScroll}><RiArrowDownSLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

