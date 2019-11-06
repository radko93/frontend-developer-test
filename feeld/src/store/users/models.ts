export type GetUsersRequest = undefined
export type GetUsersSuccess = User[]
export type GetUsersFailure = Error

export type LikeUserRequest = UserId
export type LikeUserSuccess = UserId
export type LikeUserError = Error

type UserId = string
type Gender = string
type Sexuality = string

export type User = {
  id: UserId
  info: UserInfo
  associated?: {
    age: number
    gender: Gender
    sexuality: Sexuality
    name: string
  }
  photos?: UserPhoto[]
}

export type UserInfo = {
  age: number
  type: 'single' | 'couple'
  gender: Gender
  sexuality: Sexuality
  name: string
  about?: string
  desires?: string[]
  interests?: string[]
}

export type UserPhoto = {
  url: string
  width: number
  height: number
}
