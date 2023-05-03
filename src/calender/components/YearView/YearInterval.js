import React, { useState } from "react";

const YearInterval = (props) => {
  const { currentDate, setCurrentDate, decadeStart, month, year, setYear, selectedDate } = props;

  const [activeYear, setActiveYear] = useState(new Date().getFullYear())
  const endYear = decadeStart + 9;

  const decadeYears = [];
  for (let decade = decadeStart - 1; decade <= endYear + 1; decade++) {
    decadeYears.push(decade);
  }

  const handleYearClick = (years) => {
    console.log(years);
    setYear(years);
    setCurrentDate(new Date(years, month, currentDate.getDate()));
  };

  return (
    <div className="yearGrid">
      {decadeYears.map((years) => (
        <div
          key={years}
          className={`${years === currentDate.getFullYear() ? "selectedYear" : years === activeYear ? "activeYear" : "disabledYear"
            }`}
          // className={` ${
          //   years === year ? "selectedYear" : "disabledYear"
          // }`}
          onClick={() => handleYearClick(years)}
        >
          {years}
        </div>
      ))}
    </div>
  );
};

export default YearInterval;
