import { requestUserDropsInfo as requestUserDropsInfoAPI } from 'src/constants/Api/User/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/dropsSlice'

export const requestUserDropsInfo = (offset: number, setOffset: Function, user_id: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserDropsInfoAPI(offset, user_id)
      dispatch(loadingSuccess(response.data))
      setOffset(offset + 10)
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }