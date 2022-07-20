export interface IUser {
    email: string
    id: string
    username: string
}
  
export interface IUsersState {
    users: IUser | null
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}

    