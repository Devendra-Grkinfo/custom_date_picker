import React from 'react'
import { eachYearOfInterval } from 'date-fns'
import { object } from 'prop-types'
 

const YearInterval = (props) => {

const {upperInterval,lowerInterval} = props

// const firstInterval = upperInterval
// const endInterval = lowerInterval

let timeInterval = eachYearOfInterval({start:upperInterval,end:lowerInterval})
 
//   const yearInterval = Object.keys(timeInterval).map((keys)=>{
//     return [timeInterval]
//   })
const yearInterval =[];
 for (let i = 0; i < timeInterval.length; i++) {
    yearInterval.push(Object.values(timeInterval[i]));
  }
 console.log(typeof(timeInterval))
 console.log(yearInterval[1])
  return (
    <div>
    {yearInterval.map((year)=>(
            <div>{year}</div>
        ))
    }  
    </div>
  )
}

export default YearInterval
