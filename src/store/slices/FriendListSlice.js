import { createSlice } from "@reduxjs/toolkit";

const FriendSlice = createSlice({
  name: "friend",
  initialState: [],
  reducers: {
    setFriendsList(state, action) {
      return (state = [action.payload]);
    },
  },
});

export const { setFriendsList } = FriendSlice.actions;
export default FriendSlice;
