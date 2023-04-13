import React from "react";
import { format, addMonths, subMonths } from "date-fns";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "../calender.css";
import { useState } from "react";

const Header = (props) => {
  const {
    currentDate,
    setCurrentDate,
    dateFormat,
    setDateFormat,
    render,
    setRender,
    decadeStart
  } = props;
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  // const [ next,setNext]=useState(currentDate,"month")
  // const [ prev,setPrev]=useState(currentDate,"month")
  const [viewType,setViewType]= useState('month')

const decadeEnd = decadeStart+9;

// function nextValue(currentDate, viewType) {
  // switch (viewType) {
  //   case 'month':
  //     return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  //   case 'year':
  //     return setCurrentDate(new Date(currentDate.getFullYear() + 1, 0, 1));
  //   case 'decade':
  //     return new Date(currentDate.getFullYear() + 10, 0, 1);
  //   default:
  //     return currentDate;
  // }
// }

  const nextValue = () => {
    switch (viewType) {
      case 'month':
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
      case 'year':
        return setCurrentDate(new Date(currentDate.getFullYear() + 1, 0, 1));
      case 'decade':
        return  setCurrentDate(new Date(currentDate.getFullYear() + 10, 0, 1));
      default:
        return currentDate;
    }

    // if (month > 12) {
    //   // setCurrentDate (new Date(year, month, new Date().getDate()));
    //   setYear(year + 1);
    //   setMonth(1);
    //   setCurrentDate(new Date(year, month));
    // } else {
    //   setCurrentDate(new Date(year, month));
    // }
  };
  const prevValue = () => {
    switch (viewType) {
      case 'month':
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      case 'year':
        return  setCurrentDate(new Date(currentDate.getFullYear() - 1, 0, 1));
      case 'decade':
        return setCurrentDate(new Date(currentDate.getFullYear() - 10, 0, 1));
      default:
        return currentDate;
    }
    //   setMonth(month-1);
    // if (month < 1) {
    //   setYear(year - 1);
    //   setMonth(12);
    //   setCurrentDate(new Date(year, month));
    // } else {
    //   setCurrentDate(new Date(year, month));
    // }
  };
  // function prevValue(currentDate, viewType) {
  //   switch (viewType) {
  //     case 'month':
  //       return new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  //     case 'year':
  //       return new Date(currentDate.getFullYear() - 1, 0, 1);
  //     case 'decade':
  //       return new Date(currentDate.getFullYear() - 10, 0, 1);
  //     default:
  //       return currentDate;
  //   }
  // }
  const onClickMonth = () => {
    if (render === 1) {
      setRender(render + 1);
      setDateFormat("yyyy");
      setViewType('year')
    }
    if (render === 2) {
      setRender(render + 1);
      // setDateFormat(upperInterval + "-" + lowerInterval);
      setDateFormat(decadeStart+"-"+decadeEnd)
      setViewType('decade')
  };
}

  return (
    <div className="dateview">
      <div className="header ">
        <div>
          <button className="header-icon" onClick={prevValue}>
            <BsChevronLeft />
          </button>
        </div>
        <div>
          <button className="header-icon" onClick={onClickMonth}>
            {/* {format(currentDate, dateFormat)} */}
            {currentDate.toLocaleString('default', { month: 'long' })} {year}
          </button>
        </div>
        <div>
          <button className="header-icon" onClick={nextValue}>
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
  };

export default Header;
