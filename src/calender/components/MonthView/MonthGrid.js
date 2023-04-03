import {format} from 'date-fns';
import React,{useState} from 'react'

const MonthGrid = (props) => {
    const {currentDate,setCurrentDate} = props
    const handleSelect=(value)=> {
        setCurrentDate(value)
      }
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return (
    <div className='months'>
    <div className='monthGrid' >
    {month.map((month)=>(
        <div className={`${month==format(currentDate,"MMMM")? "selectedMonth":"disabledMonth"}`} key={month} value={month}><button onClick={handleSelect}> {month} </button></div>
    )) }
    </div>
    </div>
  )
}

export default MonthGrid


