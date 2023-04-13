import {format} from 'date-fns';
import React,{useState} from 'react'

const MonthView = (props) => {
    const {currentDate,setCurrentDate,month,setMonth,year,selectedDate} = props
    // const[dateMonth,setDateMonth]=useState(currentDate.getMonth())
    // const start = startOfYear(currentDate);
    // const months = [];
    // for (let i = 0; i < 12; i++) {
    //     months.push(getMonth(addMonths(start, i)));
    //   }
    // const year = currentDate.getFullYear()

    // const [selectedMonth,setSelectedMonth] = useState(currentDate.getMonth())
    const handleSelect = (value)=> {
      // if(value=== selectedMonth){
        setMonth(value)
        setCurrentDate(new Date(year,value,selectedDate.getDate()))     
      // }
      }
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // let monthName = month[months[0]]
  return (
    <div className='monthGrid'>
    {months.map((month,i)=>(
        <div className={`${i === month ? "selectedMonth":"disabledMonth"}`} key={i} value={i} onClick={()=> handleSelect(i)} >{month}</div>  
    )) }
    </div>
  )
}

export default MonthView
