import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk(
  'getusers',
  async (dispatch, getState) => await axios.get('https://jsonplaceholder.typicode.com/users')
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: null
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getUsers.fulfilled]: (state, action) =>  {
      state.status = 'success'
      state.users = action.payload.data
    },
    [getUsers.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export default userSlice.reducer