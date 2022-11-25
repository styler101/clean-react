import { RemoteAutencation } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-httpclient'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAutencation
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAutencation(url, httpPostClientSpy)
  return { httpPostClientSpy, sut }
}

describe('Remote Autentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
