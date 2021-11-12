import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../containers/Users/usersSlice'

export const store = configureStore({
  reducer: {
      users: usersReducer
  },
})