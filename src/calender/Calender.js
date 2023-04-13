import React from "react";
import './calender.css'
import Header from "./components/Header";
import DateView from "./components/WeekDateView/DateView";
import MonthView from './components/MonthView/MonthView'
import { useState } from "react";
import YearInterval from "./components/YearView/YearInterval"; 

const Calender = (props) => {


// const [upperInterval,setUpperInterval] = useState(2000)
// const [lowerInterval,setLowerInterval] = useState(2009)

const{currentDate,setCurrentDate,selectedDate,setSelectedDate}=props

const [dateFormat,setDateFormat] = useState("MMMM yyyy")
const [year,setYear]=useState(currentDate.getFullYear())
const [month,setMonth]=useState(currentDate.getMonth())
const [render,setRender]=useState(1)
const decadeStart = Math.floor(year/ 10) * 10
  return (
    <div className="calendar">
    <Header currentDate={currentDate}  setCurrentDate={setCurrentDate} decadeStart={decadeStart} render={render} setRender={setRender}  dateFormat={dateFormat} setDateFormat={setDateFormat} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    {render=== 1 && <>
    <DateView currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </> }
    { render===2 &&<>
      <MonthView currentDate={currentDate}  setCurrentDate={setCurrentDate} month={month} setMonth={setMonth} year={year} selectedDate={selectedDate}/>
    </>
    }
    { render===3 &&<>
      <YearInterval currentDate={currentDate} decadeStart={decadeStart} year={year} setYear={setYear}  selectedDate={selectedDate} setCurrentDate={setCurrentDate}/>
    </>
    }
    </div>
  );
};

export default Calender;
