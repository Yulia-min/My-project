import { requestUserEditionsInfo as requestUserEditionsInfoAPI } from 'src/constants/Api/User/User'
import { requestUserSaleInfo as requestUserSaleInfoAPI } from 'src/constants/Api/User/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  loadingSaleSuccess,
} from '../reducers/editionsSlice'

export const requestUserEditionsInfo = (offset: number, setOffset: Function, user_id: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserEditionsInfoAPI(offset, user_id)
      dispatch(loadingSuccess(response.data))   
      setOffset(offset + 10)  
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

  export const requestUserSaleInfo = (offset: number, setOffset: Function, user_id: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserSaleInfoAPI(offset, user_id)
      dispatch(loadingSaleSuccess(response.data))   
      setOffset(offset + 10)  
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }