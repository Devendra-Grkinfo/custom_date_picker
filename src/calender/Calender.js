import React, { useState } from "react";
import './calender.css'
import Header from "./components/Header";
import MonthGrid from "./components/MonthView/MonthGrid";
import DateView from "./components/WeekDateView/DateView";
import YearList from "./components/YearView/YearList";


const Calender = (props) => {

const{currentDate,setCurrentDate,selectedDate,setSelectedDate}=props
const [active,setActive]=useState(1)
const [dateFormat, setDateFormat] = useState('MMMM yyyy')

  return (
    <div className="calendar">
          <Header setActive={setActive} active={active} dateFormat={dateFormat}  setDateFormat={setDateFormat}  currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      { active===1 && 
      <DateView currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate}/> 
      }
      { active ===2 && 
      <YearList currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      }
      { active ===3 && 
      <MonthGrid currentDate={currentDate} setCurrentDate={setCurrentDate} setActive={setActive} active={active} />
      }
    </div>
  );
};

export default Calender;
 