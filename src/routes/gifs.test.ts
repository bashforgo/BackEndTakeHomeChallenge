import { createMockContext } from '@shopify/jest-koa-mocks'
import { Context } from 'koa'
import { default as _gifsRoutes } from './gifs'

const gifsRoutes = _gifsRoutes as (ctx: Context) => Promise<void>

jest.mock('../services/GifsService')

describe('gifsRoutes', () => {
  describe('GET /gifs', () => {
    let ctx: Context

    beforeEach(async () => {
      ctx = createMockContext({
        method: 'GET',
        url: '/gifs',
      })

      await gifsRoutes(ctx)
    })

    it('should create the correct response', () => {
      expect(ctx.body).toMatchSnapshot()
    })
  })
})
