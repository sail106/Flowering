import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api/Axios';

const initialState = {
  selectedTime: '',
  // consultantSessionName: '',
  // messageId: 2,

}


export const getConsultantSessionName = createAsyncThunk(
  'selectedTime/getConsultantSessionName',
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



const selectedSlice = createSlice({
  name: 'selected',
  initialState,

  reducers: {

    setSelectedTime: (state, { payload }) => {
      state.selectedTime = payload
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {
        state.consultantSessionName = payload.sessionId
      })
  }

})

export const { setSelectedTime, 
} = selectedSlice.actions;

export default selectedSlice.reducer;
