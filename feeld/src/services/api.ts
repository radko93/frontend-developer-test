import axios, { Method } from 'axios'
import { GetUsersSuccess } from '../store/users/models'

export type Headers = {
  [key: string]: string
}

export type RequestOptions = {
  url: string
  method: Method,
  headers?: Headers
  data?: string
  timeout?: number
}

export type Config = {
  baseUrl: string
  headers?: Headers
}

export type Context = {
  token?: string
}

export type SuccessResult<T> = { data: T }

export type ErrorResult = Error

export type Result<T> = SuccessResult<T> | ErrorResult

export default class API {
  private config: Config

  public constructor(config: Config) {
    this.config = config
  }

  private makeCoreHeaders = (token?: string, optionalHeaders?: Headers): Headers => {
    const headers: Headers = {
      'Content-Type': 'application/json',
    }
    if (token) {
      headers['session-token'] = token
    }
    return Object.assign(headers, optionalHeaders)
  }

  // Api methods
  public getUsers = (context: Context) => (): Promise<Result<GetUsersSuccess>> => {
    return this.callBaseService(`/api/v1/users`, 'GET', context)
  }

  private callBaseService = <T>(
    endpoint: string,
    method: Method,
    context: Context,
    body: object | null = null,
    headers: Headers = {},
  ) => {
    return this.callApi<T>({
      url: `${this.config.baseUrl}/${endpoint}`,
      method,
      headers: this.makeCoreHeaders(context.token, { ...headers, ...(this.config && this.config.headers) }),
      data: body ? JSON.stringify(body) : undefined,
    })
  }

  callApi = <T>(options: RequestOptions): Promise<Result<T>> => {
    return axios.request<T>(options)
      .then(response => {
        return {
          data: response.data
        }
      })
      .catch(error => {
        return new Error(error)
      })
  }

}