import React from 'react'
import {format,startOfMonth,endOfMonth,startOfWeek,endOfWeek, isSameDay, isSameMonth, addDays, parse} from "date-fns";

const Cells = (props) => {

 const{currentDate,setCurrentDate,selectedDate,setSelectedDate} = props 
 const onDateClick =(day) => {
    setSelectedDate(day);
    } 

const monthStart = startOfMonth(currentDate);
const monthEnd = endOfMonth(monthStart);
const startDate = startOfWeek(monthStart);
const endDate = endOfWeek(monthEnd);
const dateFormat = "dd";
const rows = [];
let days = [];
let day = startDate;
let formattedDate = "";
while (day <= endDate) {
   for (let i = 0; i < 7; i++) {
   formattedDate = format(day, dateFormat);
//    const cloneDay = day;
   days.push(
      <div 
       className={`column cell ${!isSameMonth(day, monthStart)
       ? "disabled" : isSameDay(day, selectedDate) 
       ? "selected" : "" }`} 
       key={day} 
       onClick={() => onDateClick(day)}
       > 
       <span className="number">{formattedDate}</span>
       {/* <span className="bg">{formattedDate}</span> */}
     </div>
     );
   day = addDays(day, 1);
  }
   rows.push(
      <div className="row" key={day}> {days} </div>
    );
   days = [];
 }
  return (
    <div className="body">{rows}</div>
  )
}

export default Cells
