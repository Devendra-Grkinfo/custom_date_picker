// import React from 'react'
// import { eachYearOfInterval , getYear} from 'date-fns'

// const YearList = (props) => {
//   const{currentDate,setCurrentDate, active , setActive} = props
//    const startYear = getYear(currentDate) -5;
//    const endYear = getYear(currentDate)+6;
//    const yearRange = (start, stop, step) =>
//     Array.from(
//     { length: (stop - start) / step + 1 },
//     (value, index) => start + index * step
//     );
//     const onClick =()=>{
//       setActive(3)
//       setCurrentDate.getYear()
//     }
  //  const startYear = currentDate.setYear(currentDate.getFullYear()-5)
  //  const endYear = currentDate.setYear(currentDate.getFullYear()+6)
  // console.log(startYear,endYear)
  // console.log(yearRange)
// const YearList = () => {
//   return (
//     <div className='yearGrid'>
//       {yearRange(startYear,endYear,1).map((year)=> (<div className={`${year === getYear(currentDate)? "selectedYear":"disabledYear"}`} key={year}>
//        <button onClick={onClick}>
//        {year}
//        </button></div>))}
//     <div>
      
//     </div>
//   )
// }