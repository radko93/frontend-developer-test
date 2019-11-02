export type LoginRequest = {
  email: string
}

export type LoginResponse = {
  token: string
}

export type LoginFailure = Error
