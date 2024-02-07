import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api/Axios';

const initialState = {
  session: undefined,
  isSetClear: false,
  creatorSessionName: '',
  community_id: '',
  messageId: 2,
  participantId: 1,
  creatorid: '',
  personalmessageList: [
    {
      id: 1,
      role: '',
      imageUrl: '',
      side: 'left',
      message: '대화를 시작합니다.'

    }
  ],

  communitymessageList: [
    {
      id: 1,
      role: '',
      imageUrl: '',
      side: 'left',
      message: '대화를 시작합니다.'
    }
  ],

  creator: {
    creatorid: 0,
    role: '',
    imageUrl: '',
    name: ''
  },

  participantList: [
    {
      id: 0,
      role: '',
      imageUrl: '',
      name: '',
      ismic: '',
      isAudio: '',

    }
  ]
}

export const getCreatorid = createAsyncThunk(
  'community/getCreatorSessionName',
  async ( payload,{ rejectWithValue }) => {
    try {
      const response = await Axios.get(`community/getinfo/`+payload )
      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  }
)
 
 
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

    // setCustomer: (state, { payload }) => {
    //   state.customer = payload
    // },

    setSession: (state, { payload }) => {
      state.session = payload
    },
    setCommunityid: (state, { payload }) => {
      state.community_id = payload
    }, setCreatorid: (state, { payload }) => {
      state.creatorid = payload
    },
    resetSessionName: (state) => {
      state.creatorSessionName = ''
    },

    resetMsg: (state) => {
      state.messageId = 2;
      state.personalmessageList = [
        {
          id: 1,
          role: '',
          imageUrl: '',
          side: 'left',
          message: '대화를 시작합니다.'
        }
      ]
      state.communitymessageList = [
        {
          id: 1,
          role: '',
          imageUrl: '',
          side: 'left',
          message: '대화를 시작합니다.'
        }
      ]
    },

    appendpersonalmessageList: (state, { payload }) => {
      if (payload.id > state.messageId) {
        state.messageId = payload.id + 1
      } else {
        payload.id = state.messageId
        state.messageId = state.messageId + 1
      }
      state.personalmessageList.push(payload)
    },

    appendcommunitymessageList: (state, { payload }) => {
      if (payload.id > state.messageId) {
        state.messageId = payload.id + 1
      } else {
        payload.id = state.messageId
        state.messageId = state.messageId + 1
      }
      state.communitymessageList.push(payload)
    },

    appendParticipantList: (state, { payload }) => {
      payload.id = state.participantId
      state.participantId = state.participantId + 1
      state.participantList.push(payload)
    }

  },

  extraReducers: (builder) => {
    builder
      // .addCase(getCreatorSessionName.fulfilled, (state, { payload }) => {
      //   state.creatorSessionName = payload.sessionId
      // })
  }

})

export const { settingModalOn, settingModalOff, setSession, resetSessionName, appendpersonalmessageList, appendcommunitymessageList,
  setReservationId, resetMsg, setCommunityid, appendParticipantList } = communitySlice.actions;

export default communitySlice.reducer;
