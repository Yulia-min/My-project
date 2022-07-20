import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import dropsSlice from './reducers/dropsSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    drops: dropsSlice,
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>