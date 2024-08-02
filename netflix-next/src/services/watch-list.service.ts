import { axiosWithAuth } from "@/app/api/interceptors"
import { IWatchListResponce } from "@/types/watch-list.types"

class WatchListService {
    BASE_URL = '/user/watch-list'

    async getWatchList() {
        const responce = await axiosWithAuth.get<Array<IWatchListResponce>>(this.BASE_URL)
        return responce.data
    }

    async addToWatchList(data: string) {
        const responce = await axiosWithAuth.post<IWatchListResponce>(this.BASE_URL, data)
        return responce.data
    }

    async removeFromWatchList(data: string) {
        const responce = await axiosWithAuth.delete(this.BASE_URL, {data: data})
        return responce
    }
}

export const watchListService = new WatchListService()