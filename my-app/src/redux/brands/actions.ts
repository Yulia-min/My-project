import { requestBrandsInfo as requestBrandsInfoAPI } from 'src/constants/Api/Moments/Moments'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/brandsSlice'


export const requestBrandsInfo = (): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestBrandsInfoAPI()
        dispatch(loadingSuccess(response.data))
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}