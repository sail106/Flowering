import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api/Axios';

const initialState = {
  consultantSessionName: '',

  participantId: 2,

  participantList: [
    {
      id: 1,
      role: '',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sail106.appspot.com/o/anon.jpg?alt=media&token=c8378e56-f874-4051-beac-fa925e121143'
      ,
      name: 'bot',
      isMic: 'true',
      isCam: 'true',

    }
  ]
}

export const getconsultantSessionName = createAsyncThunk(
  'consult/getconsultantSessionName',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`consultings/join`, { reservationId: reservationId })
      return response.data
    } catch (err) {

      return rejectWithValue(err)
    }
  }
)


const consultsessionnameSlice = createSlice({
  name: 'consultsessionname',
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
    setconsultantSessionName: (state, { payload }) => {
      state.consultantSessionName = payload
    },
    removeconsultantSessionName: (state) => {
      state.consultantSessionName = '';
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

    appendParticipantList: (state, { payload }) => {
      payload.id = state.participantId //처음에 2
      state.participantId = state.participantId + 1
      state.participantList.push(payload)

    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getconsultantSessionName.fulfilled, (state, { payload }) => {
        state.consultantSessionName = payload.sessionId
      })
  }

})

export const { settingModalOn, settingModalOff, setSession, resetSessionName,
  setReservationId, resetMsg, setconsultid, setCustomer, setconsultantSessionName
  , appendParticipantList, removeconsultantSessionName
} = consultsessionnameSlice.actions;

export default consultsessionnameSlice.reducer;
