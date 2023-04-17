import React,{useState} from 'react'
import './month.css'


const MonthView = (props) => {
    const {currentDate,setCurrentDate,month,setMonth,year,selectedDate} = props
    const handleSelect = (value)=> {
      // if(value=== selectedMonth){
        setMonth(value)
        setCurrentDate(new Date(year,value,currentDate.getDate()))     
      // }
      }
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // let monthName = month[months[0]]
  return (
    <div className='monthGrid'>
    {months.map((month,i)=>(
        <div className={`${i===currentDate.getMonth()? "selectedMonth":"disabledMonth"}`} key={i} value={i} onClick={()=> handleSelect(i)} >{month}</div>  
    )) }
    </div>
  )
}

export default MonthView
