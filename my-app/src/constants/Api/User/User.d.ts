import { IDrop } from "src/redux/types/dropsTypes"
import { IEdition } from "src/redux/types/editionsTypes"
import { ISavedCards } from "src/redux/types/savedCardTypes"
import { IUser } from "src/redux/types/userTypes"


export type UserData = {
    email: string
    id: string
    username: string
    about: string
    name: string
    logo: any
}

export type DropData = {
    count: number
    next: string
    results: [
        {
            id: string
            drop: {
                id: string
                pack_artwork: string
                price: number
                title: string
            }
        }
    ]
}

export type EditionData = {
    name: string
    result: []
}

export type SavedCardsData = {
    name: string
    result: []
}

export type DropBanerData = {
    id: string
    marketplace_banner: string
}


export type UserInfoResponse = IUser

export type DropsInfoResponse = IDrop

export type EditionsInfoResponse = IEdition

export type SavedCardsInfoResponse = ISavedCards
