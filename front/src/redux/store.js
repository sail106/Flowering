import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { configureStore   } from '@reduxjs/toolkit';  
// import thunk from 'redux-thunk';  

 import AvatarReducer from "../components/avatar/avatarSlice"; 
import permissionReducer from './reducers/permissionReducer';

// Combine reducers
const reducers = combineReducers({
  avatar: AvatarReducer,
  permission: permissionReducer,
  
});

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
};   

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure store with Redux Toolkit
const store = configureStore({
  reducer: persistedReducer,
  // middleware: [  thunk], // Include thunk in middleware
});


export default store;
