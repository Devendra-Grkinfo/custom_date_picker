import React from "react";
import Cells from "./Cells";

const DateView = (props) => {
  const { currentDate, setCurrentDate, setSelectedDate, selectedDate } = props;

  const day = [" sun ", " mon ", " tue ", " wed ", " thu ", " fri ", " sat "];

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
