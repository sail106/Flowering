// redux/reducers/permissionReducer.js

import { SET_AUDIO_PERMISSION, SET_VIDEO_PERMISSION } from '../actions/permissionActions';

const initialState = {
  audioPermission: true,  
  videoPermission: true,  
};

const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO_PERMISSION:
      return {
        ...state,
        audioPermission: action.payload,
      };
    case SET_VIDEO_PERMISSION:
      return {
        ...state,
        videoPermission: action.payload,
      };
    default:
      return state;
  }
};

export default permissionReducer;
