import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from '../types/userTypes'

const initialState: IUserState = {
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loading(state: IUserState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IUserState, action: PayloadAction<IUser>) {
      state.isLoading = false
      state.user = action.payload
    },
    finish(state: IUserState) {
      state.isLoading = false
    },
    error(
      state: IUserState,
      action: PayloadAction<{ error: IUserState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default userSlice.reducer
export const { loading, loadingSuccess, finish, error } = userSlice.actions