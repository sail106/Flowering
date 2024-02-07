import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api/Axios';
import axios from 'axios';
import getStoredState from 'redux-persist/es/getStoredState';

const initialState = {
  ExpertList: [] // 빈 배열로 초기화합니다.
}

export const fetchExpertById = createAsyncThunk(
  'ExpertsList/fetchExpertById',
  async (id) => {
    console.log('fetchExpertByIdfetchExpertByIdfetchExpertById' )
    // const { access_token } = getState().auth.logonUser; // Redux store에서 액세스 토큰 가져오기
    // const config = {
    //   headers: {
    //     'Authorization': `Bearer ${access_token}`,
    //     'Content-Type': 'application/json'
    //     // 다른 필요한 헤더도 추가할 수 있습니다.
    //   }
    // };

    const response = await Axios.get(`http://i10c106.p.ssafy.io:8080/v1/consultant/detail/${id}`);

    console.log('sss' + response.data_body)
    return response.data.data_body;
  }
);

const ExpertsListSlice = createSlice({
  name: 'ExpertsList',
  initialState,

  reducers: {
    setExpertList: (state, { payload }) => {
      console.log('xxx')
      state.ExpertList.push(payload); // ExpertList를 새로운 데이터로 설정합니다.
    },



  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {
    //     console.log('xxxxx')
    //     state.consultantSessionName = payload.sessionId;

    //   });
  }
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
  setExpertList // 이 부분을 추가합니다.
} = ExpertsListSlice.actions;

export default ExpertsListSlice.reducer;
