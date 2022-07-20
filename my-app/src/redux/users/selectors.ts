import { IUsersState } from "../types/usersTypes";

export const getUserInfo = (state: { users: IUsersState }) => state.users
export const getErrorInfo = (state: {users: IUsersState}) => state.users.error