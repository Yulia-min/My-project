import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { UserData, UserInfoResponse } from './User.d'
const fetcher = new Fetcher()

export const requestUserInfo = () =>{
    const user_id = localStorage.getItem("id")
    return fetcher.requestToReceive<UserData, UserInfoResponse>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.GET,
    })
}