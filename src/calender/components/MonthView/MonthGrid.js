import {format} from 'date-fns';
import React,{useState} from 'react'

const MonthGrid = (props) => {
    const {currentDate,setCurrentDate} = props
    // const[dateMonth,setDateMonth]=useState(currentDate.getMonth())
    // const start = startOfYear(currentDate);
    // const months = [];
    // for (let i = 0; i < 12; i++) {
    //     months.push(getMonth(addMonths(start, i)));
    //   }
    const handleSelect=(value)=> {
        setCurrentDate(value)
      }
    //   console.log(dateMonth)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // let monthName = month[months[0]]
  return (
    <div className='months'>
    <div className='monthGrid'>
    {month.map((month)=>(
        <div className={`${month==format(currentDate,"MMMM")? "selectedMonth":"disabledMonth"}`} key={month} value={month}> {month} </div>
    )) }
    </div>
    </div>
  )
}

export default MonthGrid


    {/* <tbody>
      {months.map((row, i) => (
        <tr key={i}>
          {(month) => {
            return (
              <td
                key={i}
                className={` ${month.getMonth() === currentDate.getMonth()
       ? "selectedMonth" :  "disabledMonth" }`} 
                onClick={ () => handleSelect(month.getMonth())}
              >
                {format(month, 'MMMM',)}
              </td>
            );
          }}
        </tr>
      ))}
    </tbody> */}