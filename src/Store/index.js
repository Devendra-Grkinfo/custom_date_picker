import { configureStore } from '@reduxjs/toolkit';
import dateTimePickerSlice from './dateTimePickerSlice';


const store = configureStore({
    reducer: {
        dateTimePicker: dateTimePickerSlice,
    },
});

export default store;