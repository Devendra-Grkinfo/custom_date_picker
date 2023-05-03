import React from "react";
import { format } from "date-fns";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import "../calender.css";
import { useState } from "react";

const Header = (props) => {
  const { currentDate, setCurrentDate, render, setRender, decadeStart, setDecadeStart } = props;

  // const [month, setMonth] = useState(currentDate.getMonth() + 1);
  // const [year, setYear] = useState(currentDate.getFullYear());
  const [viewType, setViewType] = useState("month");
  const decadeEnd = decadeStart + 9;
  
  // console.log("decadeStart", decadeStart)

  const nextValue = () => {
    switch (viewType) {
      case "month":
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
      case "year":
        return setCurrentDate(new Date(currentDate.getFullYear() + 1, 0, 1));
      case "decade":
        setCurrentDate(new Date(decadeStart + 10, 0, 1));
        setDecadeStart(decadeStart + 10);
        break;
      default:
        return currentDate;
    }
  };

  const prevValue = () => {
    switch (viewType) {
      case "month":
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      case "year":
        return setCurrentDate(new Date(currentDate.getFullYear() - 1, 0, 1));
      case "decade":
        setDecadeStart(decadeStart - 10);
        setCurrentDate(new Date(currentDate.getFullYear() - 10, 0, 1));
        break;
      default:
        return currentDate;
    }
  };

  function dateFormat() {
    switch (viewType) {
      case "month":
        return currentDate.toLocaleDateString('en-US', {
          year: "numeric",
          month: "long",
        })
      case "year":
        return currentDate.toLocaleDateString('en-US', {
          year: "numeric"
        });
      case "decade":
        return `${decadeStart}-${decadeEnd}`
      default:
        return currentDate;
    }
  }
  const onClickMonth = () => {
    if (render === 1) {
      setRender(2);
      setViewType("year");
    } else if (render === 2) {
      setRender(3);
      setViewType("decade");
    } else if (render === 3) {
      setRender(1);
      setViewType("month");
    }
  };

  // console.log("format", format(currentDate, dateFormat))
  return (
    <div className="header ">
      <button className="button" onClick={prevValue}>
        <RiArrowLeftSLine />
      </button>
      <div className="header-name" onClick={onClickMonth}>
        {dateFormat()}
      </div>
      <button className="button" onClick={nextValue}>
        <RiArrowRightSLine />
      </button>
    </div>
  );
};

export default Header;
