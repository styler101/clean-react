import { RemoteAutencation } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-httpclient'

describe('Remote Autentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAutencation(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
