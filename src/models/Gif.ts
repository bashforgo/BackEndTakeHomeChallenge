import IGif from './IGif'
import IGiphy from './IGiphy'

class GiphyGif implements IGif {
  constructor(private response: IGiphy) {}

  toObject() {
    const {
      title,
      images: {
        downsized_large: { url },
      },
    } = this.response
    return { title, url }
  }
}

export default class Gif implements IGif {
  private constructor(private delegate: IGif) {}

  static fromGiphy(response: IGiphy): Gif {
    return new Gif(new GiphyGif(response))
  }

  toObject() {
    return this.delegate.toObject()
  }
}
