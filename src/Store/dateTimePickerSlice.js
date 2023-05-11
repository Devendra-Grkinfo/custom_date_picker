import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isInputClicked: false,
    inputValue: '',
    isValidDateTime: true,
    showTooltip: false,
    open: false,
    time: "12:00 AM"

}

const dateTimePickerSlice = createSlice({
    name: 'dateTimePicker',
    initialState: initialState,
    reducers: {
        updateState: (state, action) => {
            assignValueInState(action.payload, state)
        },
        resetState: (state) => {
            assignValueInState(initialState, state)
        },
    },
})

//     reducers: {
//         setIsInputClicked: (state, action) => {
//             state.isInputClicked = action.payload;
//         },
//         setInputValue: (state, action) => {
//             state.inputValue = action.payload;
//         },
//         setIsValidDateTime: (state, action) => {
//             state.isValidDateTime = action.payload;
//         },
//         setShowTooltip: (state, action) => {
//             state.showTooltip = action.payload;
//         },
//         setOpen: (state, action) => {
//             state.open = action.payload;
//         },
//     },
// });  
const assignValueInState = (obj, state) => {
    for (const key in obj) { state[key] = obj[key] }
}

// console.log(dateTimePickerSlice.actions)

export default dateTimePickerSlice.reducer;
export const { updateState, resetState } = dateTimePickerSlice.actions
// export const { setIsInputClicked, setInputValue, setIsValidDateTime, setShowTooltip, setOpen } = dateTimePickerSlice.actions;