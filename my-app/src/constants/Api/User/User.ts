import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { DropData, DropsInfoResponse, EditionData, EditionsInfoResponse, SavedCardsData, SavedCardsInfoResponse, UserData, UserInfoResponse } from './User.d'

const fetcher = new Fetcher()
const user_id = localStorage.getItem("id")

export const requestUserInfo = () =>
    fetcher.requestToReceive<UserData, UserInfoResponse>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.GET,
    })

export const requestUserDropsInfo = (offset: number) => 
  fetcher.requestToReceive<DropData, DropsInfoResponse>({
    url: `users/${user_id}/drops/`,
    params: {limit: 10, offset},
    method: HTTP_METHODS.GET,
  })


export const requestUserEditionsInfo = (offset: number) =>
  fetcher.requestToReceive<EditionData, EditionsInfoResponse>({
  url: `users/${user_id}/editions/`,
  params: {limit: 10, offset},
  method: HTTP_METHODS.GET,
})

export const requestUserSaleInfo = (offset: number) =>
  fetcher.requestToReceive<EditionData, EditionsInfoResponse>({
  url: `users/${user_id}/editions/`,
  params: {limit: 10, offset, is_on_sale: true},
  method: HTTP_METHODS.GET,
})

export const requestUserSavedInfo = (offset: number) =>
  fetcher.requestToReceive<SavedCardsData, SavedCardsInfoResponse>({
  url: `users/${user_id}/saved/`,
  params: {limit: 10, offset},
  method: HTTP_METHODS.GET,
})
