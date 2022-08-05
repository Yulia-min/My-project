import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBrand, IBrandState } from '../types/brandsTypes'

const initialState: IBrandState = {
  brands: null,
  results: [],
  isLoading: false,
  error: null,
}

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    loading(state: IBrandState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IBrandState, action: PayloadAction<IBrand>) {
      state.isLoading = false
      state.brands = action.payload
      state.results = action.payload.results
    },
    finish(state: IBrandState) {
      state.isLoading = false
    },
    error(
      state: IBrandState,
      action: PayloadAction<{ error: IBrandState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default brandsSlice.reducer
export const { loading, loadingSuccess, finish, error } = brandsSlice.actions