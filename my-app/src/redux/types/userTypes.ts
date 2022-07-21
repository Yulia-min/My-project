export interface IUser {
    email: string
    id: string
    username: string
}
  
export interface IUserState {
    user: IUser | null
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}

    