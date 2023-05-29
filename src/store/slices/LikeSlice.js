import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "userLikes",
  initialState: [],
  reducers: {
    setPostCurrentLikes(state, action) {
      state.push(action.payload);
    },

    resetInitialState(state) {
      return (state = []);
    },

    increasePostLikes(state, action) {
      state.map((post) => {
        if (post.postId == action.payload) {
          post.currentLikesCount = post.currentLikesCount + 1;
        }
      });
    },

    decreasePostLikes(state, action) {
      state.map((post) => {
        if (post.postId == action.payload) {
          if (post.currentLikesCount > 0) {
            post.currentLikesCount = post.currentLikesCount - 1;
          }
        }
      });
    },
  },
});

export const { setPostCurrentLikes, resetInitialState, increasePostLikes, decreasePostLikes } = likeSlice.actions;
export default likeSlice;
