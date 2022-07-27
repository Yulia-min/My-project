import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEdition, IEditionState } from '../types/editionsTypes'

const initialState: IEditionState = {
  edition: null,
  saleEdition: null,
  results: [],
  saleResults: [],
  isLoading: false,
  error: null,
}

export const editionSlice = createSlice({
  name: 'edition',
  initialState,
  reducers: {
    loading(state: IEditionState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IEditionState, action: PayloadAction<IEdition>) {
      state.isLoading = false
      state.edition = action.payload
      state.results = [...state.results, ...action.payload.results]
    },
    loadingSaleSuccess(state: IEditionState, action: PayloadAction<IEdition>) {
      state.isLoading = false
      state.saleEdition = action.payload
      state.saleResults = [...state.saleResults, ...action.payload.results]
    },
    finish(state: IEditionState) {
      state.isLoading = false
    },
    error(
      state: IEditionState,
      action: PayloadAction<{ error: IEditionState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error.response.data
    },
  },
})

export default editionSlice.reducer
export const { loading, loadingSuccess, finish, error, loadingSaleSuccess } = editionSlice.actions