import React from 'react'
import {format , addMonths, subMonths } from "date-fns";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Header = (props) => {

    const{currentDate,setCurrentDate} = props

    const dateFormat = " MMM yyyy"

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
     }
     const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
     }  


  return (
    <div className="header ">
    <div>
       <button className="icon" onClick={prevMonth}>
          <BsChevronLeft/> 
       </button>
    </div>
    <div>
       <span>{format(currentDate, dateFormat)}</span>
    </div>
    <div>
       <button className="icon" onClick={nextMonth}>
          <BsChevronRight/>
       </button>
    </div>
 </div>
  )
}

export default Header
