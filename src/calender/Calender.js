import React from "react";
import './calender.css'
import Header from "./components/Header";
import DateView from "./components/WeekDateView/DateView";
import MonthGrid from './components/MonthView/MonthGrid'

import { useState } from "react";
import YearInterval from "./components/YearView/YearInterval";

const Calender = (props) => {

const [dateFormat,setDateFormat] = useState("MMMM yyyy")
const [render,setRender]=useState(1)
const [interval,setInterval] = useState(2000)

const{currentDate,setCurrentDate,selectedDate,setSelectedDate}=props


  return (
    <div className="calendar">
    <Header currentDate={currentDate} setCurrentDate={setCurrentDate} render={render} setRender={setRender}  dateFormat={dateFormat} setDateFormat={setDateFormat} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    {render===1 && <>
    <DateView currentDate={currentDate} setCurrentDate={setCurrentDate}   selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </> }
    { render===2 &&<>
      <MonthGrid currentDate={currentDate}  setCurrentDate={setCurrentDate}/>
    </>
    }
    { render===3 &&<>
      <YearInterval currentDate={currentDate} interval={interval} setCurrentDate={setCurrentDate}/>
    </>
    }
    </div>
  );
};

export default Calender;
