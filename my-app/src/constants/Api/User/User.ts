import { HTTP_METHODS } from 'src/helper/api'
import { IUser } from 'src/redux/types/userTypes'
import Fetcher from 'src/services/fetcher'
import { DropBanerData, DropData, DropsInfoResponse, EditionData, EditionsInfoResponse, SavedCardsData, SavedCardsInfoResponse, UserData, UserInfoResponse } from './User.d'

const fetcher = new Fetcher()

export const requestUserInfo = (user_id: string) =>
    fetcher.requestToReceive<UserData, UserInfoResponse>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.GET,
})

export const requestEditUserInfo = (data: UserData, user_id: string) =>
    fetcher.requestToReceive<UserData, IUser>({
      url: `users/${user_id}/`,
      method: HTTP_METHODS.PATCH,
      data
    })

export const requestUserDropsInfo = (offset: number, user_id: string) => 
  fetcher.requestToReceive<DropData, DropsInfoResponse>({
    url: `users/${user_id}/drops/`,
    params: {limit: 10, offset},
    method: HTTP_METHODS.GET,
  })

  export const requestBannerInfo = () => 
  fetcher.requestToReceive<object, DropBanerData>({
    url: '/drops/nearest_drop_banner/',
    method: HTTP_METHODS.GET,
  })


export const requestUserEditionsInfo = (offset: number, user_id: string) =>
  fetcher.requestToReceive<EditionData, EditionsInfoResponse>({
  url: `users/${user_id}/editions/`,
  params: {limit: 10, offset},
  method: HTTP_METHODS.GET,
})

export const requestUserSaleInfo = (offset: number, user_id: string) =>
  fetcher.requestToReceive<EditionData, EditionsInfoResponse>({
  url: `users/${user_id}/editions/`,
  params: {limit: 10, offset, is_on_sale: true},
  method: HTTP_METHODS.GET,
})

export const requestUserSavedInfo = (offset: number, user_id: string) =>
  fetcher.requestToReceive<SavedCardsData, SavedCardsInfoResponse>({
  url: `users/${user_id}/saved/`,
  params: {limit: 10, offset},
  method: HTTP_METHODS.GET,
})
