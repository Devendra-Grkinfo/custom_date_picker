import React from 'react'
import {format , addMonths, subMonths } from "date-fns";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import '../calender.css'
import { useState } from "react";

const Header = (props) => {

    const{currentDate,setCurrentDate,dateFormat,setActive,active,setDateFormat} = props

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
     }
     const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
     }  
     const onClick =()=> {
      if (active<3) {
         setActive(active+1)
            setDateFormat("yyyy")
      } else {
         setActive(1)
      }
      
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
       <button className="header-icon"  onClick={onClick}>{format(currentDate, dateFormat)}</button>
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
