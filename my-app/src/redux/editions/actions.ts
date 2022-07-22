import { requestUserEditionsInfo as requestUserEditionsInfoAPI } from 'src/constants/Api/Users/User'
import { requestUserSaleInfo as requestUserSaleInfoAPI } from 'src/constants/Api/Users/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  loadingSaleSuccess,
} from '../reducers/editionsSlice'

export const requestUserEditionsInfo = (offset: number, setOffset: Function): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserEditionsInfoAPI(offset)
      dispatch(loadingSuccess(response.data))   
      setOffset(offset + 10)  
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

  export const requestUserSaleInfo = (offset: number, setOffset: Function): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const response = await requestUserSaleInfoAPI(offset)
      dispatch(loadingSaleSuccess(response.data))   
      setOffset(offset + 10)  
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }