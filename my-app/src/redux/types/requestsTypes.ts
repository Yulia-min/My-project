import { FormDataChangePassword, FormDataForgotPassword, FormDataSigIn } from "src/constants/Api/SignIn/SignIn.d"

export type RequestSignInActionProps = {
  users: FormDataSigIn
}

export type RequestForgetFormActionProps = {
  email: FormDataForgotPassword
}

export type RequestChangeFormActionProps = {
  password: FormDataChangePassword
}
