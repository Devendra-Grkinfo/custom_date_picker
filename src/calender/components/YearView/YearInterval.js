import React from 'react'
import { eachYearOfInterval } from 'date-fns'


const YearInterval = (props) => {

const {interval} = props

const firstInterval = new Date(interval,0);
const endInterval = new Date(interval+9,0)

const timeInterval = eachYearOfInterval({start:firstInterval,end:endInterval})
const YearInterval = [];
 for (let i = 0; i < 10; i++) {
    YearInterval.push(timeInterval);
  }
 console.log(timeInterval)
  return (
    <div>
    {
        YearInterval.map((year)=>(
            <div>{getFullYear(year)}</div>
        ))
    }  
    </div>
  )
}

export default YearInterval
