import Router from 'koa-router'
import GifsService from '../services/GifsService'

const gifsService = new GifsService()
const router = new Router()

router.get('/gifs', async ctx => {
  const gifs = await gifsService.getTrending()

  ctx.body = {
    gifs: gifs.map(gif => gif.toObject()),
  }
})

export default router.routes()
