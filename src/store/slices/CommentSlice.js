import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "userComments",
  initialState: [],
  reducers: {
    setUserComments(state, action) {
      state.push(action.payload);
    },

    resetCommentInitialState(state) {
      return (state = []);
    },

    increasePostComments(state, action) {
      state.map((post) => {
        if (post.postId === action.payload) {
          post.currentCommentsCount = post.currentCommentsCount + 1;
        }
        return
      });
    },

    decreasePostComments(state, action) {
      state.map((post) => {
        if (post.postId === action.payload) {
          post.currentCommentsCount = post.currentCommentsCount - 1;
        }
        return []
      });
    },
  },
});

export const { setUserComments, resetCommentInitialState, increasePostComments, decreasePostComments } = commentSlice.actions;
export default commentSlice;
