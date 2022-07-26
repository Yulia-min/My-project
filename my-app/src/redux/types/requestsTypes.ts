import { FormDataChangePassword, FormDataForgotPassword, FormDataSigIn } from "src/constants/Api/SignIn/SignIn.d"
import { UserData } from "src/constants/Api/User/User.d"

export type RequestSignInActionProps = {
  user: FormDataSigIn
}

export type RequestForgetFormActionProps = {
  email: FormDataForgotPassword
}

export type RequestChangeFormActionProps = {
  password: FormDataChangePassword
}

export type RequestEditUserActionProps = {
  user: UserData
}
