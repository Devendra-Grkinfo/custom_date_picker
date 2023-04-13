import React,{useState} from 'react'
import { eachYearOfInterval } from 'date-fns'
import { object } from 'prop-types'
 

const YearInterval = (props) => {

  const{currentDate,setCurrentDate,decadeStart,month,year,setYear,selectedDate} = props

//  const firstInterval = upperInterval
//  const endInterval = lowerInterval

// let timeInterval = eachYearOfInterval({start:upperInterval,end:lowerInterval})
 
//   const yearInterval = Object.keys(timeInterval).map((keys)=>{
//      return [timeInterval]
//   })
// const yearInterval =[];
//  for (let i = 0; i < timeInterval.length; i++) {
//     yearInterval.push(Object.values(timeInterval[i]));
//   }
//  console.log(typeof(timeInterval))
//  console.log(yearInterval[1])
//  const [selectedYear, setSelectedYear] = useState(null);
// const month = currentDate.getMonth()

  const handleYearClick = (year) => {
    console.log(year)
    setYear(year)
    setCurrentDate(new Date(year,month,selectedDate.getDate()));
  };

  // const renderYears = () => {
  //   const years = [];
    // let year = decadeStart
    const decadeYears = Array.from({ length: 10 }, (_, index) => decadeStart + index);
    // console.log(decadeYears)

    const decadeEnd = decadeStart+10;
  //   for (let i = 0; i < 9; i++) {
  //     years.push(
  //       <div
  //         key={year}
  //         className={`year ${selectedYear === year ? 'selected' : ''}`}
  //         onClick={() => handleYearClick(year)}
  //       >
  //         {year}
  //       </div>
  //     );
  //     year++;
  //   }

  //   return years;
  // };

  return (
    <div>
        <div className="yearGrid">
        <div className='years'>{decadeStart-1}</div>
        {    decadeYears.map((decade,i) => (
      <div key={i} className={`${decade === currentDate.getFullYear() ? "selectedYear":"disabledYear"}`} onClick={() =>handleYearClick(decade)} >{decade}</div>
    ))}
        <div className='years'>{decadeEnd}</div>
    </div>
    {/* {yearInterval.map((year)=>(
            <div>{year}</div>
        ))
    }   */}
    </div>
  )
}

export default YearInterval
