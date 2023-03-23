import React from "react";
import Calender from "./Calender";
import Timer from "./Timer";

const DisplayArea = () => {
  return (
    <div className="display">
      <span>
        <Calender />
        <Timer
          time={[
            "12",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
          ]}
          meridian={["AM", "PM"]}
        />
      </span>
      {/* <Timer hours='12' mins='00' interval='30'  /> */}
    </div>
  );
};

export default DisplayArea;
