import { HTTP_METHODS } from 'src/helper/api'
import { IUser } from 'src/redux/types/userTypes'
import Fetcher from 'src/services/fetcher'
import { DropBanerData, DropData, DropsInfoResponse, EditionData, EditionsInfoResponse, SavedCardsData, SavedCardsInfoResponse, UserData, UserInfoResponse } from './User.d'

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

export const requestUserDropsInfo = (offset: number) => 
  fetcher.requestToReceive<DropData, DropsInfoResponse>({
    url: `users/${user_id}/drops/`,
    params: {limit: 10, offset},
    method: HTTP_METHODS.GET,
  })

  export const requestBannerInfo = () => 
  fetcher.requestToReceive<DropBanerData, object>({
    url: '/drops/nearest_drop_banner/',
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
