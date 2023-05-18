import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/UserDataSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import ChatSlice from "./slices/ChatSlice";
import FriendSlice from "./slices/FriedListSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  userDataReducer: userDataSlice.reducer,
  ChatReducer: ChatSlice.reducer,
  FriendsDataReducer: FriendSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
