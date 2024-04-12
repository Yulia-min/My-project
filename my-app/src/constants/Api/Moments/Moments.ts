import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { MomentsData, MomentsInfoResponse, SportTypesData, SportTypesInfoResponse, AthleteData , BrandsData, PlaceData } from './Moments.d'

const fetcher = new Fetcher()

export const requestMomentsInfo = (data:string) =>
    fetcher.requestToReceive<MomentsData, MomentsInfoResponse>({
      url: `moments/${data}`,
      method: HTTP_METHODS.GET,
})

export const requestSportTypeInfo = () =>
    fetcher.requestToReceive<SportTypesData, SportTypesInfoResponse>({
      url: 'sport_types/',
      method: HTTP_METHODS.GET,
})

export const requestAthleteInfo = () =>
    fetcher.requestToReceive<{}, AthleteData>({
      url: 'athletes/',
      method: HTTP_METHODS.GET,
})

export const requestBrandsInfo = () =>
    fetcher.requestToReceive<{}, BrandsData>({
      url: 'brands/',
      method: HTTP_METHODS.GET,
})

export const requestPlacesInfo = () =>
    fetcher.requestToReceive<{}, PlaceData>({
      url: 'places/',
      method: HTTP_METHODS.GET,
})