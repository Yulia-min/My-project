import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { FormDataChangePassword, FormDataForgotPassword, FormDataSigIn, SignInResponse } from './SignIn.d'

const fetcher = new Fetcher()

export const requestSignIn = (data: FormDataSigIn) =>
  fetcher.requestToReceive<FormDataSigIn, SignInResponse>({
    url: 'login/',
    method: HTTP_METHODS.POST,
    data,
  })

  export const requestForgetForm = (data: FormDataForgotPassword) =>
    fetcher.requestToReceive<FormDataForgotPassword, SignInResponse>({
      url: 'reset-password/',
      method: HTTP_METHODS.POST,
      data,
  })

  export const requestChangeForm = (data: FormDataChangePassword) =>
  fetcher.requestToReceive<FormDataChangePassword, SignInResponse>({
    url: 'reset-password-confirmation/',
    method: HTTP_METHODS.POST,
    data,
  })
