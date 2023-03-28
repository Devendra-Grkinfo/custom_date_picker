import React from "react";
import Calender from "../calender/Calender";
import Timer from "../timer/Timer";

const DisplayArea = (props) => {

  const { date, setDate, time, setTime } = props;
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 1) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hour < 12 ? 'AM' : 'PM'}`;
      times.push(time);
    }
  }

  return (
    <div className="display">
      <span className="display1">
        <Calender date={date} setDate={setDate} />
        <Timer time={times} selectedTime={time} setTime={setTime} numIntervals={5}  />

      </span>
    </div>
  );
};

export default DisplayArea;
