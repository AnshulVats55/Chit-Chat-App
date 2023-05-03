import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice(
    {
        name:'userData',
        initialState:[],
        reducers:{
            setUserData(state, action){
                state.push(action.payload);
            }
        }
    }
);

export const { setUserData } =  userDataSlice.actions;
export default userDataSlice;