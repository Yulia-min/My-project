import { requestUserSavedInfo as requestUserSavedInfoAPI } from 'src/constants/Api/User/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/savedCardsSlice'

export const requestUserSavedInfo = (offset: number, setOffset: Function): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserSavedInfoAPI(offset)
      dispatch(loadingSuccess(response.data))   
      setOffset(offset + 10)  
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }