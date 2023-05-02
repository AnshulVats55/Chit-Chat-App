import { createSlice } from '@reduxjs/toolkit';

const postDataSlice = createSlice(
    {
        name:'postData',
        initialState:[],
        reducers:{
            setPostData(state, action){
                state.push(action.payload);
            }
        }
    }
);

export const { setPostData } =  postDataSlice.actions;
export default postDataSlice;