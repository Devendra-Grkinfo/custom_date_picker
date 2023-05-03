import React from "react";
import Cells from "./Cells";

const DateView = (props) => {
  const { currentDate, setCurrentDate, setSelectedDate, selectedDate } = props;

  const day = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="dateview">
      <div className="weekdays">
        {day.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <Cells
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default DateView;
