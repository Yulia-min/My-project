import { IAthlete } from "src/redux/types/athletesTypes"
import { IBrand } from "src/redux/types/brandsTypes"
import { IMoments } from "src/redux/types/momentsTypes"
import { IPlace } from "src/redux/types/placesTypes"
import { ISportType } from "src/redux/types/sportTypes"

export type MomentsData = {
    id: string
    count: number
    results: [
        {
            id: string
            likes: number
            max_price: number
            min_price: number
            title: string
            original_pic: {
                id: string
                attachment: string
                format: string
            }
        }
    ]
}

export type MomentsInfoResponse = IMoments

export type SportTypesData = {
    count: number
    results: [
        {
            name: string
        }
    ]
}

export type SportTypesInfoResponse = ISportType

export type AthleteData = {
    count: number
    results: [
        {
            id: number
            full_name: string
        }
    ]
}

export type AthleteDataResults = {
    id: number
    full_name: string
}

export type AthleteInfoResponse = IAthlete

export type BrandsData = {
    count: number
    results: [
        {
            id: number
            name: string
        }
    ]
}

export type BrandDataResults = {
    id: number
    name: string
}

export type BrandsInfoResponse = IBrand

export type PlaceData = {
    count: number
    results: [
        {
            name: string
        }
    ]
}

export type PlaceDataResults = {
    name: string
}

export type PlaceInfoResponse = IPlace
