import { IDrop } from 'src/redux/types/dropsTypes'
import { IEdition } from 'src/redux/types/editionsTypes'
import { IUser } from '../../../redux/types/usersTypes'

export type UserData = {
    email: string
    id: string
    username: string
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


export type UserInfoResponse = IUser

export type DropsInfoResponse = IDrop

export type EditionsInfoResponse = IEdition