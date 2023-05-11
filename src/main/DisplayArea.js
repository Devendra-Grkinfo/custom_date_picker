import React, { useRef } from "react";
import Calender from "../calender/Calender";
import Timer from "../timer/Timer";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateState } from "../Store/dateTimePickerSlice";

const DisplayArea = (props) => {
  const dispatch = useDispatch();
  const { currentDate, setCurrentDate, selectedDate, setSelectedDate, setTime, showTimer, selectedColor, listIntervals, setOpen, timeInterval } = props;
  const { open, time } = useSelector((state) => state.dateTimePicker);

  let displayRef = useRef()
  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (displayRef.current && !displayRef.current.contains(event.target)) {
        // dispatch(setOpen(!open))
        dispatch(updateState({ open: false }));
      }
    })
  }, [])

  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += timeInterval) {
      let tempHour = hour === 0 || hour === 12 ? 12 : hour > 12 ? hour - 12 : hour;
      const time = `${tempHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
      times.push(time);
    }
  }
  // console.log(times);

  return (
    <div className="display" ref={displayRef}>
      <Calender currentDate={currentDate} setCurrentDate={setCurrentDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {showTimer ? <Timer times={times} selectedTime={time} setTime={setTime} listIntervals={listIntervals} selectedColor={selectedColor} /> : null}
    </div>
  );
};

export default DisplayArea;
