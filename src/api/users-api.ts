import {APIResponseType, GetUsersItems, instance} from "./api";


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5, term = '', friend:boolean | null = false) {
        return instance.get<GetUsersItems>(
            `/users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`,)
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
