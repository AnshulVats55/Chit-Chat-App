import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "userProfileDetails",
  initialState: {
    name: "Piyush Kumar",
    posts: 250,
    followers: 7000,
    following: 50,
  },
  reducers: {
    changeUserName(state) {
      state.name = "Anshul Vats";
    },

    changeUserSocialInfo(state) {
      state.posts = 500;
      state.followers = 10000;
      state.following = 150;
    },
  },
});

export const { changeUserName, changeUserSocialInfo } = profileSlice.actions;
export default profileSlice;
