export type PostT = {
    id: number
    message: string
    like_count: number
}
export type ContactsT = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosT = {
    small: string | null
    large: string | null
}
export type ProfileT = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsT
    photos: PhotosT
}
export type UserT = {
    id: number
    name: string
    status: string
    followed: boolean
    photos:PhotosT
}
