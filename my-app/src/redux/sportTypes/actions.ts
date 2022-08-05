import { requestSportTypeInfo as requestSportTypeInfoAPI } from 'src/constants/Api/Moments/Moments'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/sportTypeSlice'


export const requestSportTypeInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestSportTypeInfoAPI()
        dispatch(loadingSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}