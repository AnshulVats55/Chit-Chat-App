import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice(
    {
        name:'userComments',
        initialState:[],
        reducers:{
            setUserComments(state, action){
                state.push(action.payload);
            }
        }
    }
);

export const { setUserComments } =  commentSlice.actions;
export default commentSlice;