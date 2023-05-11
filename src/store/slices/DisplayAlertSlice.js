import { createSlice } from "@reduxjs/toolkit";

const displayAlertSlice = createSlice(
    { 
        name:'displayAlert',
        initialState:{},
        reducers:{
            changeDisplayState(state,action){
                console.log(action.payload);
                return state=action.payload;
            }
        }
    }

);

export const {changeDisplayState}=displayAlertSlice.actions;
export default displayAlertSlice;