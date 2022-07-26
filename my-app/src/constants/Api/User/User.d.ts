import { IUser } from '../../../redux/types/userTypes'

export type UserData = {
    email: string
    id: string
    username: string
    about: string
    name: string
    logo: any
}

export type UserInfoResponse = IUser
