import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api/Axios';
import axios from 'axios';
import { useSelector } from 'react-redux';

const initialState = {
  session: undefined,
  isSetClear: false,
  consultantSessionName: '',
  messageId: 2,
  participantId: 1,

  messageList: [
    {
      id: 1,
      role: '',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/sail106.appspot.com/o/anon.jpg?alt=media&token=c8378e56-f874-4051-beac-fa925e121143',
      side: 'left',
      message: '대화를 시작합니다.',
      name: 'bot',

    }
  ],

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

export const postConsultingResult = createAsyncThunk(
  'consult/postConsultingResult',
  async (payload, { rejectWithValue }) => {
    try {

      alert('진단 결과가 저장되었습니다. 컨설팅을 종료합니다.')
      return response.data
    }
    catch (err) {
      return rejectWithValue(err)
    }

  }

)




export const makeResult = createAsyncThunk(

  'consult/makeResult',
  async (payload, { rejectWithValue }) => {
    try {

      const response = await Axios.post(`report/create/` + payload.consultingFinishRequest.consultingid)

      return response.data
    }

    catch (err) {
      return rejectWithValue(err)
    }

  }
)



export const getCustomer = createAsyncThunk(

  'consult/getCustomer',
  async (payload, { rejectWithValue }) => {
    try {


      const response = await Axios.get(`consultings/` + payload)

      return response.data
    }

    catch (err) {
      return rejectWithValue(err)
    }

  }
)


export const getConsultant = createAsyncThunk(

  'consult/getConsultant',
  async (payload, { rejectWithValue }) => {
    try {


      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      const config = {
        headers: {
          'Authorization': `Bearer ${state.auth.logonUser.access_token}`,
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.get(baseurl + `consultings/${payload}`, config);

      return response.data
    }

    catch (err) {
      return rejectWithValue(err)
    }

  }
)

export const getConsultantSessionName = createAsyncThunk(
  'consult/getCreatorSessionName',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`consultings/join`, { reservationId: reservationId })

      return response.data
    } catch (err) {

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
    setConsultantSessionName: (state, { payload }) => {
      state.consultantSessionName = payload
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
          message: '대화를 시작합니다.',
          name: 'bot',
        }
      ]

    },

    appendMessageList: (state, { payload }) => {

      if (payload.id >= state.messageId) {
        state.messageId = payload.id + 1
      }

      state.messageList.push(payload)
    },

    appendParticipantList: (state, { payload }) => {
      payload.id = state.participantId
      state.participantId = state.participantId + 1
      state.participantList.push(payload)
    }

  },

  extraReducers: (builder) => {
    builder
      .addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {
        state.consultantSessionName = payload.sessionId
      })
  }

})

export const { settingModalOn, settingModalOff, setSession, resetSessionName, appendMessageList,
  setReservationId, resetMsg, setconsultid, setCustomer, setConsultantSessionName
  , appendParticipantList, resetParticipant
} = consultSlice.actions;

export default consultSlice.reducer;
