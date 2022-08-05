import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISavedCards, ISavedCardsState } from '../types/savedCardTypes'

const initialState: ISavedCardsState = {
  savedCards: null,
  results: [],
  isLoading: false,
  error: null,
}

export const savedCardsSlice = createSlice({
  name: 'savedCards',
  initialState,
  reducers: {
    loading(state: ISavedCardsState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: ISavedCardsState, action: PayloadAction<ISavedCards>) {
      state.isLoading = false
      state.savedCards = action.payload
      state.results = [...state.results, ...action.payload.results]
    },
    finish(state: ISavedCardsState) {
      state.isLoading = false
    },
    error(
      state: ISavedCardsState,
      action: PayloadAction<{ error: ISavedCardsState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default savedCardsSlice.reducer
export const { loading, loadingSuccess, finish, error } = savedCardsSlice.actions