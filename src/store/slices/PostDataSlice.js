import { createSlice } from '@reduxjs/toolkit';

const postDataSlice = createSlice(
    {
        name:'postData',
        initialState:[],
        reducers:{
            setPostData(state, action){
                return state = action.payload;
            },
            createPostByRedux(state,action){
                // console.log(action.payload)
                return [action.payload,...state]  
            },
            deletePostById(state,action){
                const id = action.payload
                return state.filter((post)=>post.id !== id)
            }
        }
    }
);

export const { setPostData,createPostByRedux,deletePostById } =  postDataSlice.actions;
export default postDataSlice;