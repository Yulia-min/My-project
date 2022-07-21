import { requestUserDropsInfo as requestUserDropsInfoAPI } from 'src/constants/Api/Users/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/dropsSlice'

export const requestUserDropsInfo = (count: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserDropsInfoAPI(count)
      dispatch(loadingSuccess(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }