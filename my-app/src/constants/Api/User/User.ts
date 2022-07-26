import { HTTP_METHODS } from 'src/helper/api'
import { IUser } from 'src/redux/types/userTypes'
import Fetcher from 'src/services/fetcher'
import { UserData, UserInfoResponse } from './User.d'
const fetcher = new Fetcher()

const user_id = localStorage.getItem("id")

export const requestUserInfo = () =>
    fetcher.requestToReceive<UserData, UserInfoResponse>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.GET,
})

export const requestEditUserInfo = (data: UserData) =>
    fetcher.requestToReceive<UserData, IUser>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.PATCH,
      data
})
