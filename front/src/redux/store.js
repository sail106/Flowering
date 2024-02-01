import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import AvatarReducer from "../components/avatar/avatarSlice";
import communityReducer from './slices/communitySlice';
import consultReducer from './slices/consultSlice';
import authReducer from './slices/authSlice';

// 리듀서들을 합칩니다
const reducers = combineReducers({
  avatar: AvatarReducer,
  community: communityReducer,
  consult: consultReducer,
  auth: authReducer,
});

// Redux Persist 구성
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["auth","consult"] // 이 상태들을 저장합니다.
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
