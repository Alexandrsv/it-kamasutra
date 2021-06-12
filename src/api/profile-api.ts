import {PhotosT, ProfileT} from "../Types/types";
import {instance, APIResponseType} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosT
}

export const profileAPI = {

    getProfileData(userId: number) {
        return instance.get<ProfileT>(`profile/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    updateStatus(text: string) {
        return instance.put<APIResponseType>(`profile/status/`, {status: text})
            .then(response => {
                return response.data
            })
    },

    saveProfile(profile: ProfileT) {
        return instance.put<APIResponseType>(`profile/`, profile)
            .then(response => {
                return response.data
            })
    },

    saveAvatarPhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })

    },

}
