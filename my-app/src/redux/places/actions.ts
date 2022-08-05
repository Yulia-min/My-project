import { requestPlacesInfo as requestPlacesInfoAPI } from 'src/constants/Api/Moments/Moments'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/placesSlice'


export const requestPlacesInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestPlacesInfoAPI()
        dispatch(loadingSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}