import {GetUsersItems, instance, APIResponseType} from "./api";


export const usersAPI = {

    getUsers(currentPage = 2, pageSize = 5) {
        return instance.get<GetUsersItems>(`/users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`,)
            .then(response => {
                return response.data
            }) as Promise<APIResponseType>
    }
}
