import React, { useState } from "react";
import './timer.css'
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";


const Timer = (props) => {

  const { time} = props;
  const [index, setIndex]=useState(0)
  const increaseScroll =()=>{
    setIndex(index+1)
  }
  const decreaseScroll =()=>{
    if (index==0) {
      
      setIndex(45)  
    }else{
      setIndex(index-1)
    }

  }

  return (
    <div className="timer">
    <button onClick={increaseScroll}><BsChevronUp/></button>
      <div className="list">
      <p>{time[index+2]}</p>
      <p>{time[index+1]}</p>
      <p >{time[index]}</p>
      <p>{time[index-1]}</p>
      <p>{time[index-2]}</p>
        {/* {time.map((title) => {
          return <div key={title}>{title}</div>;
        })} */}
      </div>
      <button onClick={decreaseScroll}><BsChevronDown/></button>
    </div>
  );
};

export default Timer;
