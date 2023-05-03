import React from "react";
import "./calender.css";
import Header from "./components/Header";
import DateView from "./components/WeekDateView/DateView";
import MonthView from "./components/MonthView/MonthView";
import { useState } from "react";
import YearInterval from "./components/YearView/YearInterval";

const Calender = (props) => {
  const { currentDate, setCurrentDate, selectedDate, setSelectedDate } = props;

  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [render, setRender] = useState(1);
  const [decadeStart, setDecadeStart] = useState(
    Math.floor(currentDate.getFullYear() / 10) * 10
  );

  return (
    <div className="calendar">
      <Header
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        decadeStart={decadeStart}
        setDecadeStart={setDecadeStart}
        render={render}
        setRender={setRender}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {render === 1 && (
        <DateView
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {render === 2 && (
        <MonthView
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          month={month}
          setMonth={setMonth}
          year={year}
          selectedDate={selectedDate}
        />
      )}
      {render === 3 && (
        <YearInterval
          currentDate={currentDate}
          month={month}
          decadeStart={decadeStart}
          year={year}
          setYear={setYear}
          selectedDate={selectedDate}
          setCurrentDate={setCurrentDate}
        />
      )}
      {render === 4 && (
        <DateView
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
};

export default Calender;
