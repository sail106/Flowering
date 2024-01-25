 import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// auth
import AuthReducer from '../../features/auth/authSlice'
// consulting
import ConsultReducer from '../../features/consulting/consultingRoom/consultSlice'
import ConsultantListReducer from '../../features/consulting/consultantListSlice' 
// common
import AvatarReducer from "../common/avatar/avatarSlice"; 


const reducers = combineReducers({
  // auth: AuthReducer,
   // consult: ConsultReducer,
   avatar: AvatarReducer,
   permission: permissionReducer,

});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
};   

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
  // reducer: persistedReducer,
  // middleware: [thunk],
// });

// export default store;