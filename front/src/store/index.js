import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import AvatarReducer from "../components/avatar/avatarSlice";
import communityReducer from './communitySlice';
import consultReducer from './consultSlice';
import consultsessionnameReducer from './consultsessionnameSlice';
import selectedReducer from './selectedSlice';
import authReducer from './authSlice';
import ExpertsListReducer from './ExpertsListSlice';

// 리듀서들을 합칩니다
const reducers = combineReducers({
  avatar: AvatarReducer,
  community: communityReducer,
  consult: consultReducer,
  selected: selectedReducer,
  consultsessionname: consultsessionnameReducer,
  ExpertsList: ExpertsListReducer,

  auth: authReducer,
});

// Redux Persist 구성
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["auth","consultsessionname"] // 이 상태들을 저장합니다.
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
