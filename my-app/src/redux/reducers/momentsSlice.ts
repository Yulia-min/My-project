import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMoments, IMomentsState } from '../types/momentsTypes'

const initialState: IMomentsState = {
  moments: null,
  results: [],
  next: '',
  isLoading: false,
  isNextLoading: false,
  error: null,
}

export const momentsSlice = createSlice({
  name: 'moments',
  initialState,
  reducers: {
    loading(state: IMomentsState) {
      state.isLoading = true
      state.error = null
    },
    loadingNext(state: IMomentsState) {
      state.isNextLoading = true
      state.error = null
    },
    loadingSuccess(state: IMomentsState, action: PayloadAction<IMoments>) {
      state.isLoading = false
      state.moments = action.payload
      state.results = action.payload.data.results
      state.next = action.payload.data.next
    },
    loadingSuccessNext(state: IMomentsState, action: PayloadAction<IMoments>) {
      state.isLoading = false
      state.moments = action.payload
      state.results = [...state.results, ...action.payload.data.results]
      state.next = action.payload.data.next
    },
    finish(state: IMomentsState) {
      state.isLoading = false
    },
    finishNext(state: IMomentsState) {
      state.isNextLoading = false
    },
    error(
      state: IMomentsState,
      action: PayloadAction<{ error: IMomentsState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default momentsSlice.reducer
export const { loading, loadingNext, loadingSuccess, loadingSuccessNext, finish, finishNext, error } = momentsSlice.actions