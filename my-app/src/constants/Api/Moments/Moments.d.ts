import { IMoments } from "src/redux/types/momentsTypes"
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
            isCheck: boolean
        }
    ]
}

export type AthleteDataResults = {
    id: number
    full_name: string
    isCheck: boolean
}


export type BrandsData = {
    count: number
    results: [
        {
            id: number
            name: string
            isCheck: boolean
        }
    ]
}

export type BrandDataResults = {
    id: number
    name: string
    isCheck?: boolean
}


export type PlaceData = {
    count: number
    results: [
        {
            name: string
            isCheck: boolean
        }
    ]
}

export type PlaceDataResults = {
    name: string
    isCheck: boolean
}

