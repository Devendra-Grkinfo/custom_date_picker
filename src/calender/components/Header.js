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
    decadeStart,
    setDecadeStart
  } = props;
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [viewType,setViewType]= useState('month')

const decadeEnd = decadeStart+9;

  const nextValue = () => {
    switch (viewType) {
      case 'month':
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
      case 'year':
        return setCurrentDate(new Date(currentDate.getFullYear() + 1, 0, 1));
      case 'decade':
        // return  setDecadeStart (currentDate.getFullYear() + 10)
        setCurrentDate(new Date(currentDate.getFullYear() + 10, 0, 1));
      default:
        return currentDate;
    }
  };
  const prevValue = () => {
    switch (viewType) {
      case 'month':
        return setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
      case 'year':
        return  setCurrentDate(new Date(currentDate.getFullYear() - 1, 0, 1));
      case 'decade':
        // return  setDecadeStart (currentDate.getFullYear()-10)
         setCurrentDate(new Date(currentDate.getFullYear() - 10, 0, 1)); 
      default:
        return currentDate;
    }
  };
  const onClickMonth = () => {
    if (render === 1) {
      setRender(render + 1);
      setDateFormat("yyyy");
      setViewType('year')
    }
    if (render === 2) {
      setRender(render + 1);
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
          <button className="header-name" onClick={onClickMonth}>
            {format(currentDate, dateFormat)}
            {/* {currentDate.toLocaleString('default', { month: 'long' })} {year} */}
            {/* {dateFormat} */}
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
