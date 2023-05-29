import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostApi from "../../api/services/postApi";

const { getPosts } = PostApi();

const getAllPosts = createAsyncThunk("postData/getPosts", async (thunkAPI) => {
  const response = await getPosts();
  return response;
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
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
const { setPostData, createPostByRedux, deletePostById } =
  postDataSlice.actions;
export { getAllPosts, setPostData, createPostByRedux, deletePostById };
export default postDataSlice;
