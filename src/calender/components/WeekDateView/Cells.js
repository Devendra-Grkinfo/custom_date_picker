import React,{useState} from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  addDays,
} from "date-fns";

const Cells = (props) => {
  const {
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    year,
    month,
  } = props;
  const [activeDay, setActiveDay] = useState(new Date());
  const onDateClick = (day) => {
    setSelectedDate(day);
    setCurrentDate(day);
  };
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = "dd";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
                    className={`${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : isSameDay(day, activeDay)
                ? "active"
                : "notActive"
            }`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          {/* <span className="bg">{formattedDate}</span> */}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="cell-body">{rows}</div>;
};

export default Cells;
