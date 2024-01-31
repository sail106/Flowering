import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../api/Axios';

const initialState = {
  session: undefined,
  isSetClear: false,
  consultantSessionName: '',
  messageId: 2,
  messageList: [
    {
      id: 1,
      role: '',
      imageUrl: '',
      side: 'left',
      message: '대화를 시작합니다.'

    }
  ],

}

export const getConsultantSessionName = createAsyncThunk(
  'consult/getCreatorSessionName',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`consultings/join`, { reservationId: reservationId })
      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  }
)

const consultSlice = createSlice({
  name: 'consult',
  initialState,

  reducers: {
    settingModalOn: (state) => {
      state.isSetClear = true;
    },
    settingModalOff: (state) => {
      state.isSetClear = false;
    },

    setCustomer: (state, { payload }) => {
      state.customer = payload
    },

    setSession: (state, { payload }) => {
      state.session = payload
    },
    setConsultid: (state, { payload }) => {
      state.consult_id = payload
    }, setCreatorid: (state, { payload }) => {
      state.creatorid = payload
    },
    resetSessionName: (state) => {
      state.creatorSessionName = ''
    },
    setCustomer: (state, { payload }) => {
      state.customer = payload
    },
    resetMsg: (state) => {
      state.messageId = 2;
      state.messageList = [
        {
          id: 1,
          role: '',
          imageUrl: '',
          side: 'left',
          message: '대화를 시작합니다.'
        }
      ]

    },

    appendmessageList: (state, { payload }) => {
      if (payload.id > state.messageId) {
        state.messageId = payload.id + 1
      } else {
        payload.id = state.messageId
        state.messageId = state.messageId + 1
      }
      state.messageList.push(payload)
    },



  },

  extraReducers: (builder) => {
    builder
      .addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {
        state.consultantSessionName = payload.sessionId
      })
  }

})

export const { settingModalOn, settingModalOff, setSession, resetSessionName, appendmessageList, appendconsultmessageList,
  setReservationId, resetMsg, setconsultid, setCustomer } = consultSlice.actions;

export default consultSlice.reducer;
