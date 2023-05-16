import { createSlice } from '@reduxjs/toolkit';

const ChatSlice = createSlice(
    {
        name:'chat',
        initialState:[],
        reducers:{
            getChat(state, action){
                // state.push(action.payload);
                state = [...state,action.payload]
            }
        }
    }
);

export const { getChat} =  ChatSlice.actions;
export default ChatSlice;