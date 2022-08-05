import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAthlete, IAthleteState } from '../types/athletesTypes'

const initialState: IAthleteState = {
  athletes: null,
  results: [],
  isLoading: false,
  error: null,
}

export const athletesSlice = createSlice({
  name: 'athletes',
  initialState,
  reducers: {
    loading(state: IAthleteState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IAthleteState, action: PayloadAction<IAthlete>) {
      state.isLoading = false
      state.athletes = action.payload
      state.results = action.payload.results
    },
    finish(state: IAthleteState) {
      state.isLoading = false
    },
    error(
      state: IAthleteState,
      action: PayloadAction<{ error: IAthleteState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default athletesSlice.reducer
export const { loading, loadingSuccess, finish, error } = athletesSlice.actions