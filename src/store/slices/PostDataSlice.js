import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostApi from "../../api/services/postApi";

const { createPost, deletePost, getPosts } = PostApi();

const getAllPosts = createAsyncThunk("postData/getPosts", async (thunkAPI) => {
  console.log("hello");
  const response = await getPosts();
  console.log(response)
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
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload)
      return state = action.payload;
    });
  },
});
const { setPostData, createPostByRedux, deletePostById } =
  postDataSlice.actions;
export { getAllPosts, setPostData, createPostByRedux, deletePostById };
export default postDataSlice;
