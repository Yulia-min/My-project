import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEdition, IEditionState } from '../types/editionsTypes'

const initialState: IEditionState = {
  edition: null,
  isLoading: false,
  isLoaded: false,
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
      state.error = ''
      state.edition = {...action.payload}
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
export const { loading, loadingSuccess, finish, error } = editionSlice.actions