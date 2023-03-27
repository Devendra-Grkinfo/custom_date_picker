import React from "react";
import Calender from "../calender/Calender";
import Timer from "../timer/Timer";

const DisplayArea = () => {
  return (
    <div className="display">
      <span className="display1">
        <Calender />
        <Timer time ={['12:00 am','01:00 am','01:30 am','02:00 am','02:30 am','03:00 am','03:30 am','04:00 am','04:30 am','05:00 am','05:30 am','06:00 am','07:00 am','07:30 am','08:00 am','08:30 am','09:00 am','09:30 am','10:00 am','10:30 am','11:00 am','11:30 am','12:00 pm','12:30 pm','01:00 pm','01:30 pm','02:00 pm','02:30 pm','03:00 pm','03:30 pm','04:00 pm','04:30 pm','05:00 pm','05:30 pm','06:00 pm','06:30 pm','07:00 pm','07:30 pm','08:00 pm','08:30 pm','09:00 pm','09:30 pm','10:00 pm','10:30 pm','11:00 pm','11:30 pm'
        ]}/>
      </span>
    </div>
  );
};

export default DisplayArea;
