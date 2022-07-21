import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { DropData, DropsInfoResponse, EditionData, EditionsInfoResponse, UserData, UserInfoResponse } from './User.d'

const fetcher = new Fetcher()
const user_id = localStorage.getItem("id")

export const requestUserInfo = () =>
    fetcher.requestToReceive<UserData, UserInfoResponse>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.GET,
    })

export const requestUserDropsInfo = (count: string) => 
  fetcher.requestToReceive<DropData, DropsInfoResponse>({
    url: `users/${user_id}/drops/?${count}`,
    method: HTTP_METHODS.GET,
  })


export const requestUserEditionsInfo = (params: string) =>
  fetcher.requestToReceive<EditionData, EditionsInfoResponse>({
  url: `users/${user_id}/editions/`,
  params: { params },
  method: HTTP_METHODS.GET,
})