import React from 'react'
import {format , startOfWeek , addDays} from "date-fns";

const DaysOfWeek = (props) => {

    const{currentDate,setCurrentDate} = props  
  const dateFormat = "E";
  const days = [];
  let startDate = startOfWeek(currentDate);
  for (let i = 0; i < 7; i++) {
    days.push(
       <div key={i}>
       {format(addDays(startDate, i), dateFormat)}
       </div>
    );
 }

  return (
    <div className="days">{days}</div>
  )
}

export default DaysOfWeek
