export interface IUser {
    email: string
    id: string
    username: string
    logo: string
}
  
export interface IUserState {
    user: IUser | null
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}

    