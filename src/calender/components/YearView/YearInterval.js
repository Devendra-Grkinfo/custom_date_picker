import React,{useState} from 'react'
import { eachYearOfInterval } from 'date-fns'
import { object } from 'prop-types'
 

const YearInterval = (props) => {

  const{currentDate,setCurrentDate,decadeStart,month,year,setYear,selectedDate} = props
 
    const currentYear = currentDate.getFullYear();
   // const startYear = Math.floor(currentYear / 10) * 10;
    const endYear = decadeStart + 9;

    const decadeYears = [];
    for (let year = decadeStart- 1; year <= endYear + 1; year++) {
      decadeYears.push(year
      );
    }

// console.log(decadeStart)
  const handleYearClick = (year) => {
    console.log(typeof(year))
    setYear(year) 
   setCurrentDate(year,month,currentDate.getDate())
  };
  
  console.log(currentDate)
  console.log(year)
  console.log(month)
  console.log(selectedDate.getDate())
    // const decadeYears = Array.from({ length: 10 }, (_, index) => decadeStart + index);

    // const decadeEnd = decadeStart+10;

  return (
    <div className="yearGrid">
    {decadeYears.map((year)=>(<div key={year} className={`calendar-year ${year === currentYear ? "selectedYear" : "disabledYear"}`} onClick={()=>(handleYearClick(year))} >{year}</div>))}
    </div>
    // <div>
    //     <div className="yearGrid">
    //     <div className='years'>{decadeStart-1}</div>
    //     {    decadeYears.map((decade,i) => (
    //   <div key={i} className={`${decade === currentDate.getFullYear() ? "selectedYear":"disabledYear"}`} onClick={() =>handleYearClick(decade)} >{decade}</div>
    // ))}
    //     <div className='years'>{decadeEnd}</div>
    // </div>
    // </div>
  )
}

export default YearInterval
