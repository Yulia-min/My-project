import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDrop, IDropState } from '../types/dropsTypes'

const initialState: IDropState = {
  drop: null,
  results: [],
  isDropsLoading: false,
  isLoaded: false,
  error: null,
}

export const dropSlice = createSlice({
  name: 'drop',
  initialState,
  reducers: {
    loading(state: IDropState) {
      state.isDropsLoading = true
      state.error = null
    },
    loadingSuccess(state: IDropState, action: PayloadAction<IDrop>) {
      state.isDropsLoading = false
      state.drop = action.payload
      state.results = [...state.results, ...action.payload.results]
    },
    finish(state: IDropState) {
      state.isDropsLoading = false
    },
    error(
      state: IDropState,
      action: PayloadAction<{ error: IDropState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default dropSlice.reducer
export const { loading, loadingSuccess, finish, error } = dropSlice.actions