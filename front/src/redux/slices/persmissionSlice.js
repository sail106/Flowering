// redux/slices/permissionSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  audioPermission: true,
  videoPermission: true,
};

const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setAudioPermission: (state, action) => {
      state.audioPermission = action.payload;
    },
    setVideoPermission: (state, action) => {
      state.videoPermission = action.payload;
    },
  },
});

export const { setAudioPermission, setVideoPermission } = permissionSlice.actions;

export default permissionSlice.reducer;
