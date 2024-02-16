import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../api/Axios";
import axios from "axios";
import getStoredState from "redux-persist/es/getStoredState";

const initialState = {
  ExpertList: [], // 빈 배열로 초기화합니다.
  selectedid: "",
};

export const fetchExpertById = createAsyncThunk("ExpertsList/fetchExpertById", async (selectedid, { rejectWithValue, getState }) => {
  const state = getState(); // 전체 Redux 상태를 얻습니다.

  const config = {
    headers: {
      Authorization: `Bearer ${state.auth.logonUser.access_token}`,
      "Content-Type": "application/json",
      // 다른 필요한 헤더도 추가할 수 있습니다.
    },
  };

  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const response = await axios.get(baseurl + `consultant/detail/${selectedid}`, config);

  return response.data.data_body;
});

const ExpertsListSlice = createSlice({
  name: "ExpertsList",
  initialState,

  reducers: {
    setExpertList: (state, { payload }) => {
      state.ExpertList.push(payload); // ExpertList를 새로운 데이터로 설정합니다.
    },

    setSeletedId: (state, { payload }) => {

      state.selectedid = payload;
    },
  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {

    //     state.consultantSessionName = payload.sessionId;
    //   });
  },
});

export const {
  settingModalOn,
  settingModalOff,
  setSession,
  resetSessionName,
  appendMessageList,
  setReservationId,
  resetMsg,
  setconsultid,
  getExpertList,
  setCustomer,
  setConsultantSessionName,
  appendParticipantList,
  setExpertList,
  setSeletedId,
} = ExpertsListSlice.actions;

export default ExpertsListSlice.reducer;
