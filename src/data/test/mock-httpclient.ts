import {
  HttpPostClient,
  HttpPostParams,
} from 'data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: Object
  // sut -> system under test
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve()
  }
}
