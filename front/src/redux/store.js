import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';  

import AvatarReducer from "../components/avatar/avatarSlice";
import communityReducer from './slices/communitySlice';

// 리듀서들을 합칩니다
const reducers = combineReducers({
  avatar: AvatarReducer,
  community: communityReducer,
});

// Redux Persist 구성
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
};

 const persistedReducer = persistReducer(persistConfig, reducers);

 const store = configureStore({
  reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),

});

export default store;
