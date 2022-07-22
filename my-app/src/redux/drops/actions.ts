import { requestUserDropsInfo as requestUserDropsInfoAPI } from 'src/constants/Api/Users/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/dropsSlice'

export const requestUserDropsInfo = (offset: number, setOffset: Function): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserDropsInfoAPI(offset)
      dispatch(loadingSuccess(response.data))
      setOffset(offset + 10)
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }