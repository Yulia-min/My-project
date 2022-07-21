import { requestUserEditionsInfo as requestUserEditionsInfoAPI } from 'src/constants/Api/Users/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/editionsSlice'

export const requestUserEditionsInfo = (params: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserEditionsInfoAPI(params)
      dispatch(loadingSuccess(response.data))     
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }