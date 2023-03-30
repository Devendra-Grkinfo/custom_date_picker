import React from 'react'
import {format , addMonths, subMonths } from "date-fns";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import '../calender.css'
import { useState } from "react";

const Header = (props) => {

    const{currentDate,setCurrentDate} = props
    const [monthGrid, setMonthGrid] = useState(true)
    const [dateFormat,setDateFormat] = useState("MMMM yyyy")

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
     }
     const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
     }  
     const onClickMonth =()=> {
         setMonthGrid(!monthGrid)
         setDateFormat("yyyy")
     }


  return (
   <div className='dateview'>
    <div className="header ">
    <div>
       <button className="header-icon" onClick={prevMonth}>
          <BsChevronLeft/> 
       </button>
    </div>
    <div>
       <button className="header-icon" onClick={onClickMonth}>{format(currentDate, dateFormat)}</button>
    </div>
    <div>
       <button className="header-icon" onClick={nextMonth}>
          <BsChevronRight/>
       </button>
    </div>
    </div>

    </div>
  )
}

export default Header
