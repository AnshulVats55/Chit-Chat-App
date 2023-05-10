import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postApi from "../../api/services/postApi";

const { createPost, getPosts, deletePost } = postApi;

const getAllPosts = createAsyncThunk("users/getPosts", async (thunkAPI) => {
  const response = await getPosts();

  return response.data;
});

const postDataSlice = createSlice({
  name: "postData",
  initialState: [],
  reducers: {
    setPostData(state, action) {
      return (state = action.payload);
    },
    createPostByRedux(state, action) {
      return [action.payload, ...state];
    },
    deletePostById(state, action) {
      const id = action.payload;
      return state.filter((post) => post.id !== id);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state = action.payload;
    });
  },
});

const { setPostData, createPostByRedux, deletePostById } =
  postDataSlice.actions;
export { getAllPosts, setPostData, createPostByRedux, deletePostById };
export default postDataSlice;
