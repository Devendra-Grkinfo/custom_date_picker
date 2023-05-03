import React, { useState } from "react";
import "./month.css";

const MonthView = (props) => {
  const { currentDate, setCurrentDate, month, setMonth, year, selectedDate } = props;
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());

  const handleSelect = (value) => {
    setMonth(value);
    setCurrentDate(new Date(year, value, currentDate.getDate()));
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="monthGrid">
      {months.map((month, i) => (
        <div
          className={`${i === currentDate.getMonth() ? "selectedMonth" :
            i === activeMonth ? "activeMonth" : "disabledMonth"
            }`}
          key={i}
          value={i}
          onClick={() => handleSelect(i)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default MonthView;
