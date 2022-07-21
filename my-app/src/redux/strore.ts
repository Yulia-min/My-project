import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import dropsSlice from './reducers/dropsSlice'
import userSlice from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    drops: dropsSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>