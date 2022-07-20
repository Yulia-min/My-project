export type FormDataSigIn = {
    email: string
    password: string
}

export type SignInResponse = {
    access: string
    email: string  
    id: string
    refresh: string
}
  
export type FormDataForgotPassword = {
    email: string   
}
  
export type FormDataChangePassword = {
    password: string
    token: string | null
}