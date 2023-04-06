import React from 'react'
import { getYear} from 'date-fns'

const YearList = (props) => {
  const{currentDate,setCurrentDate,upperInterval,lowerInterval} = props
   const startYear = upperInterval
   const endYear = lowerInterval
   const yearRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
    const onClick =(value)=>{
      setCurrentDate(value)
    }
  //  const startYear = currentDate.setYear(currentDate.getFullYear()-5)
  //  const endYear = currentDate.setYear(currentDate.getFullYear()+6)
  // console.log(startYear,endYear)
  console.log(yearRange)
  return (
    <div className='yearGrid'>
      {yearRange(startYear,endYear,1).map((year)=> (<div className={`${year === getYear(currentDate)? "selectedYear":"disabledYear"}`} key={year} value={year} onClick={onClick}>
       {year}
      </div>))}
    </div>
      
  )
}

export default YearList