import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISportType, ISportTypeState } from '../types/sportTypes'

const initialState: ISportTypeState = {
  sportTypes: null,
  result: [],
  isLoading: false,
  error: null,
}

export const sportTypesSlice = createSlice({
  name: 'sportTypes',
  initialState,
  reducers: {
    loading(state: ISportTypeState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: ISportTypeState, action: PayloadAction<ISportType>) {
      state.isLoading = false
      state.sportTypes = action.payload
      state.result = action.payload.results
    },
    finish(state: ISportTypeState) {
      state.isLoading = false
    },
    error(
      state: ISportTypeState,
      action: PayloadAction<{ error: ISportTypeState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default sportTypesSlice.reducer
export const { loading, loadingSuccess, finish, error } = sportTypesSlice.actions