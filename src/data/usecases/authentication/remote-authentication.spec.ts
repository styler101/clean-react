import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAutencation } from './remote-authentication'

describe('Remote Autentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }
    // sut -> system under test
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutencation(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
