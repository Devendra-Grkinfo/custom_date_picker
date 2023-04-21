import React, { useState } from "react";
import DateTimePicker from './DateTimePicker';


const Main = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
        // console.log(value)
    };

    return (
        <div className="main">
            <DateTimePicker
                timeInterval={60}
                listIntervals={5}
                showTimer={true}
                value={inputValue}
                placeholder="Select a date and time"
                selectedColor="forest green"
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default Main;
