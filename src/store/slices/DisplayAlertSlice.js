import { createSlice } from "@reduxjs/toolkit";

const displayAlertSlice = createSlice(
    { 
        name:'displayAlert',
        initialState:{
            visiblity: false,
            message: "",
            status: ""
        },
        reducers:{
            changeDisplayState(state, action){
                return state = action.payload;
            }
        }
    }

);

export const {changeDisplayState}=displayAlertSlice.actions;
export default displayAlertSlice;