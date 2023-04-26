import React from "react";
import DateTimePicker from './DateTimePicker';


const Main = () => {
    return (
        <div className="main">
            <DateTimePicker
                timeInterval={60}
                listIntervals={5}
                showTimer={true}
                placeholder="Select a date and time"
                selectedColor="forest green"
            />
        </div>
    );
};

export default Main;
