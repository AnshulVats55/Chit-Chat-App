import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from './slices/UserDataSlice';
import postDataSlice from "./slices/PostDataSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import commentSlice from "./slices/CommentSlice";
import likeSlice from "./slices/LikeSlice";
import displayAlertSlice from "./slices/DisplayAlertSlice";


const persistConfig = {
    key:'root',
    version:1,
    storage,
}

const reducer = combineReducers(
    {
        userDataReducer: userDataSlice.reducer,
        postDataReducer: postDataSlice.reducer,
        commentDataReducer: commentSlice.reducer,
        likeDataReducer: likeSlice.reducer,
        displayAlertReducer:displayAlertSlice.reducer,
    }
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;