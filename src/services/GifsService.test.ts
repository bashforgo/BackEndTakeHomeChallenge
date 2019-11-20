import _request from 'request-promise-native'
import IGif from '../models/IGif'
import GifsService from './GifsService'

const request = (_request as unknown) as jest.Mock<Promise<any>, any[]>
jest.mock('request-promise-native')

describe('GifsService', () => {
  let service: GifsService

  beforeEach(() => {
    service = new GifsService()
  })

  describe('getTrending', () => {
    let res: IGif[]

    beforeEach(async () => {
      request.mockResolvedValue({
        data: [
          {
            title: 'a gif 1',
            images: { downsized_large: { url: '/the-url-1' } },
          },
          {
            title: 'a gif 2',
            images: { downsized_large: { url: '/the-url-2' } },
          },
          {
            title: 'a gif 3',
            images: { downsized_large: { url: '/the-url-3' } },
          },
        ],
      })
      res = await service.getTrending()
    })

    it('should make a request to giphy', () => {
      expect(request).toHaveBeenCalledWith(
        'https://api.giphy.com/v1/gifs/trending',
        {
          json: true,
          qs: { api_key: 'YQD46PNuiExynupQ46HOzJqctivOHt16' },
        },
      )
    })

    it('should create new model objects', () => {
      expect(res.map(gif => gif.toObject())).toMatchSnapshot()
    })
  })
})
