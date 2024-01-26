import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { imgAxios } from '../../api/Axios'

const initialState = {}

export const registAvatar = createAsyncThunk(
  'avatar/registAvatar',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await imgAxios.post('', formData)
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registAvatar.fulfilled, (state, action) => {
       })
      .addCase(registAvatar.rejected, (state, action) => {
        
       });
  }
})

export default avatarSlice.reducer;
