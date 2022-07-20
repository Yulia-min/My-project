import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUsersState } from '../types/usersTypes'

const initialState: IUsersState = {
  users: null,
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loading(state: IUsersState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IUsersState, action: PayloadAction<IUser>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    finish(state: IUsersState) {
      state.isLoading = false
    },
    error(
      state: IUsersState,
      action: PayloadAction<{ error: IUsersState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default usersSlice.reducer
export const { loading, loadingSuccess, finish, error } = usersSlice.actions