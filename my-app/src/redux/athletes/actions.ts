import { requestAthleteInfo as requestAthleteInfoAPI } from 'src/constants/Api/Moments/Moments'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/athletesSlice'


export const requestAthleteInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestAthleteInfoAPI()
        dispatch(loadingSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}