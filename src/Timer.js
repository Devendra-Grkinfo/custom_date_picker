import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
// import DatePicker from "react-datepicker";

const Timer = (props) => {
  const { time, meridian } = props;
  // const [index, setIndex] = useState(time);

  // const handleChange = (id) => {
  //   let firstItem;
  //   const filteredItems = time.filter((item) => {
  //     if (item.id === id) {
  //       firstItem = [item];
  //       return false;
  //     }
  //     return true;
  //   });
  //   setIndex([...firstItem, ...filteredItems]);
  // };

  // const [addMin, setAddMin] = useState(parseInt(mins, 10))

  // const [addHour, setAddHour] = useState(parseInt(hours, 10))

  // useEffect(() => {
  //   if (addHour==12) {
  //     setAddHour()==1
  //     setAddMin('00')
  //   } else {
  //     setAddHour()+1
  //     setAddMin('00')
  //   }

  // }, [addMin==60])

  // const addInterval=()=>{
  //     setAddMin(addMin+parseInt(interval, 10))
  //   }
  // const removeInterval=()=>{
  //     setAddMin(addMin-parseInt(interval, 10))
  //   }
  return (
    <div className="timer">
      <div className="list">
        {/* <ul>
        {time.map((item,index) => (
          <li key={index} onClick={() => handleChange(item.id)}>
            {index }
          </li>
        ))}
    </ul> */}

        {time.map((title) => {
          return <div key={title}>{title}:00</div>;
        })}
      </div>
      <div className="list">
        {meridian.map((title) => {
          return <div key={title}>{title}</div>;
        })}
      </div>
      {/* <div className='icons'>
    <button>
    <BsChevronUp onClick={addInterval}/>
    </button>
    </div>
    {addHour}:{addMin}
    <DatePicker
    controls="['timegrid']"
    timeFormat="h:mm A"
    touchUi={true}
/>
    <div className='icons'>
    <button onClick={removeInterval}>
      <BsChevronDown/>  
    </button>
    </div> */}
    </div>
  );
};

export default Timer;
