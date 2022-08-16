import { requestSignIn as requestSignInAPI } from 'src/constants/Api/SignIn/SignIn'
import { requestForgetForm as requestForgetFormAPI } from 'src/constants/Api/SignIn/SignIn'
import { requestChangeForm as requestChangeFormAPI} from 'src/constants/Api/SignIn/SignIn'
import { requestUserInfo as requestUserInfoAPI } from 'src/constants/Api/User/User'
import { requestEditUserInfo as requestEditUserInfoAPI } from 'src/constants/Api/User/User'
import { AppThunk } from '../strore'
import {
  error,
  finish,
  loading,
  loadingSuccess,
} from '../reducers/userSlice'
import { RequestChangeFormActionProps, RequestEditUserActionProps, RequestForgetFormActionProps, RequestSignInActionProps } from '../types/requestsTypes'


export const requestUserInfo = (user_id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await requestUserInfoAPI(user_id)
    dispatch(loadingSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const requestSignIn =
  ({ user }: RequestSignInActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestSignInAPI(user)
      if (data) {
        localStorage.setItem('access', data.access)
        localStorage.setItem('email', data.email)
        localStorage.setItem('id', data.id)
        localStorage.setItem('refresh', data.refresh)
        dispatch(requestUserInfo(data.id))
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

  export const requestForgetForm =
  ({ email }: RequestForgetFormActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestForgetFormAPI(email)
      if (data) {
        localStorage.clear()
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

  export const requestChangeForm =
  ({ password }: RequestChangeFormActionProps): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestChangeFormAPI(password)
      if (data) {
        localStorage.clear()
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

  export const requestEditUserInfo = ({user}: RequestEditUserActionProps, user_id: string): AppThunk => async (dispatch) => {
    try {
      dispatch(loading())
      const { data } = await requestEditUserInfoAPI(user, user_id)
      if (data) {
        dispatch(requestUserInfo(user.id))
      }
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }