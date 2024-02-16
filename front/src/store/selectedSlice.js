import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../api/Axios";

const initialState = {
  selectedTime: "",
  selectedDate: "",
  // consultantSessionName: '',
  // messageId: 2,
};

export const getConsultantSessionName = createAsyncThunk("selectedTime/getConsultantSessionName", async (reservationId, { rejectWithValue }) => {
  try {
    const response = await Axios.post(`consultings/join`, { reservationId: reservationId });

    return response.data;
  } catch (err) {

    return rejectWithValue(err);
  }
});

const selectedSlice = createSlice({
  name: "selected",
  initialState,

  reducers: {
    setSelectedTime: (state, { payload }) => {
      state.selectedTime = payload;
      state.selectedTime = state.selectedTime + ":00";
    },

    setSelectedDate: (state, { payload }) => {
      state.selectedDate = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getConsultantSessionName.fulfilled, (state, { payload }) => {
      state.consultantSessionName = payload.sessionId;
    });
  },
});

export const { setSelectedTime, setSelectedDate } = selectedSlice.actions;

export default selectedSlice.reducer;
