import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from './slices/UserDataSlice';
import postDataSlice from "./slices/PostDataSlice";
import snackbarSlice from "./slices/SnackBarSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";




const persistConfig = {
    key:'root',
    version:1,
    storage,
}

const reducer = combineReducers(
    {
        userDataReducer: userDataSlice.reducer,
        postDataReducer: postDataSlice.reducer,
        snackbar: snackbarSlice.reducer    
    }
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;