import { requestMomentsInfo as requestMomentsInfoAPI } from 'src/constants/Api/Moments/Moments'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  loadingNext,
  loadingSuccessNext,
  finishNext,
} from '../reducers/momentsSlice'


export const requestMomentsInfo = (data: string): AppThunk => async (dispatch) => {
    try {
        dispatch(loading())
        const response = await requestMomentsInfoAPI(data)
        dispatch(loadingSuccess(response.data)) 
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finish())
    }
}


export const requestNextMomentsInfo = (nextData: string): AppThunk => async (dispatch) => {
    try {
        dispatch(loadingNext())
        let offset = ''
        if(nextData?.length){
            offset = nextData.substring(nextData.indexOf('?'))
        }
        const response = await requestMomentsInfoAPI(offset)
        if(offset) {
            dispatch(loadingSuccessNext(response.data))
        } else {
            dispatch(loadingSuccess(response.data)) 
        }
    } catch (err) {
        dispatch(error({ error: err }))
    } finally {
        dispatch(finishNext())
    }
}
