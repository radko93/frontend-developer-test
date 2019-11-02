export type GetUsersRequest = undefined

export type GetUsersSuccess = {
  users: User[]
}

export type GetUsersFailure = Error

export type User = {
  name: string
}
