import { IUserState } from "../types/userTypes";

export const getUserInfo = (state: { user: IUserState }) => state.user
export const getErrorInfo = (state: {user: IUserState}) => state.user.error