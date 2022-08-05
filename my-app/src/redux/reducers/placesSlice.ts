import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlace, IPlaceState } from '../types/placesTypes'

const initialState: IPlaceState = {
  places: null,
  results: [],
  isLoading: false,
  error: null,
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    loading(state: IPlaceState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IPlaceState, action: PayloadAction<IPlace>) {
      state.isLoading = false
      state.places = action.payload
      state.results = action.payload.results
    },
    finish(state: IPlaceState) {
      state.isLoading = false
    },
    error(
      state: IPlaceState,
      action: PayloadAction<{ error: IPlaceState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default placesSlice.reducer
export const { loading, loadingSuccess, finish, error } = placesSlice.actions