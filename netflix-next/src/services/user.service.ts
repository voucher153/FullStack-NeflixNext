import { axiosWithAuth } from "@/app/api/interceptors"
import { IUser, TypeUserForm } from "@/types/auth.types"

class UserService {
    private BASE_URL = '/user/profile'

    async getProfile() {
        const responce = await axiosWithAuth.get<IUser>(this.BASE_URL)
        return responce.data
    }

    async update(data: TypeUserForm) {
        const responce = await axiosWithAuth.put(this.BASE_URL, data)
        return responce.data
    }
}

export const userService = new UserService()