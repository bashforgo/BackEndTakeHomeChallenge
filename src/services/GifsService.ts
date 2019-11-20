import request from 'request-promise-native'
import Gif from '../models/Gif'
import IGif from '../models/IGif'
import IGiphy from '../models/IGiphy'

const BASE_URL = 'https://api.giphy.com/v1'
// this really shouldn't be in VCS
const API_KEY = 'YQD46PNuiExynupQ46HOzJqctivOHt16'

export default class GifsService {
  async getTrending(): Promise<Array<IGif>> {
    const result: { data: IGiphy[] } = await request(
      `${BASE_URL}/gifs/trending`,
      {
        qs: {
          api_key: API_KEY,
        },
        json: true,
      },
    )

    return result.data.map(Gif.fromGiphy)
  }
}
