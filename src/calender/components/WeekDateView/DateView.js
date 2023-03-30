import React from 'react'
import DaysOfWeek from './DaysOfWeek'
import Cells from './Cells'


const DateView = (props) => {
    const{currentDate,setCurrentDate,setSelectedDate,selectedDate} = props
  return (
    <>
    <DaysOfWeek currentDate={currentDate} setCurrentDate={setCurrentDate}   />
    <Cells currentDate={currentDate} setCurrentDate={setCurrentDate}    selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </>
  )
}

export default DateView
