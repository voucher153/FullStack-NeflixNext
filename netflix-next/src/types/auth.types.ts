import { IWatchListResponce } from "./watch-list.types"

export interface IAuthForm {
    email: string,
    name: string
    password: string
}

interface IUserPesonal {
    id: number
    email: string
    name?: string
    userImage?: string
}

export interface IUser {
    user: IUserPesonal
    watchList: Array<IWatchListResponce>,
}

export interface IAuthResponce {
    accessToken: string,
    user: IUser
}

export type TypeUserForm = Omit<IUserPesonal, 'id'> & { password?: string }