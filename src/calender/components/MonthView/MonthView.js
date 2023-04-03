import React from 'react'
import MonthGrid from './MonthGrid'

const MonthView = () => {
  return (
    <>
    <MonthGrid currentDate={currentDate}  setCurrentDate={setCurrentDate} />
    </>
  )
}

export default MonthView
