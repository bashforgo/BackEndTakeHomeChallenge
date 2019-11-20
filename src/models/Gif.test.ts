import Gif from './Gif'
import IGif from './IGif'

describe('Gif', () => {
  let gif: IGif

  beforeEach(() => {
    gif = Gif.fromGiphy({
      title: 'a gif',
      images: { downsized_large: { url: '/the-url' } },
    })
  })

  describe('toObject', () => {
    it('should match snapshot', () => {
      expect(gif.toObject()).toMatchSnapshot()
    })
  })
})
