import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios, { imgAxios } from '../../api/Axios'

const initialState = {
  session: undefined,
  isSetClear: false,
  creatorSessionName: '',
  community_id: 0,
  messageId: 2,
  participantId: 0,

  messageList: [
    {
      id: 1,
      role: '',
      imageUrl: '', // '' : mine, '/images/d~' : other
      side: 'left', // '' : other, 'right' : mine
      message: '대화를 시작합니다.'
    }
  ],

  creator:
  {
    id: 0,
    role: '',
    imageUrl: '',
    name: ' '
  }
  ,
  
  participantList: [
    {
      id: 0,
      role: '',
      imageUrl: '',
      name: ' '
    }
  ]

}

export const getConsultantSessionName = createAsyncThunk(
  'community/getConsultantSessionName',
  async (reservationId, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`consultings/join`, { reservationId: reservationId })
      return response.data // session id 를 리턴한다.
    } catch (err) {
      console.log(err)
      return err
    }
  }
)

// export const postCommunityResult = createAsyncThunk(
//   'community/postCommunityResult',
//   async (payload, { rejectWithValue }) => {
//     try {
//       let formData = new FormData()
//       formData.append('consultingFinishRequest', new Blob([JSON.stringify(payload.consultingFinishRequest)], { type: "application/json" }))
//       formData.append('file', payload.files[0])
//       console.log(formData)
//       const response = await Axios.post(`consultings`)
//       alert('  커뮤니티를 종료합니다.')
//       return response.data
//     } catch (err) {
//       return rejectWithValue(err)
//     }
//   }
// )

const communitySlice = createSlice({
  name: 'community',
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
    setCommunityid: (state, { payload }) => {
      state.community_id = payload
    },
    resetSessionName: (state) => {
      state.creatorSessionName = ''
    },

    resetMsg: (state) => {
      state.messageId = 2;
      state.messageList = [
        {
          id: 1,
          role: '',
          imageUrl: '', // '' : mine, '/images/d~' : other
          side: 'left', // '' : other, 'right' : mine
          message: '대화를 시작합니다.'
        }
      ]
    },

    appendMessageList: (state, { payload }) => {
      if (payload.id > state.messageId) {
        state.messageId = payload.id + 1
      } else {
        payload.id = state.messageId
        state.messageId = state.messageId + 1
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

export const { settingModalOn, settingModalOff, setSession, setCustomer,
  resetSessionName, appendMessageList, setReservationId, resetMsg } = communitySlice.actions;

export default communitySlice.reducer
