import { createMockContext } from '@shopify/jest-koa-mocks'
import { Context } from 'koa'
import { default as _usersRoutes } from './users'

const usersRoutes = _usersRoutes as (ctx: Context) => Promise<void>

describe('users routes', () => {
  let ctx: Context

  describe('GET /users', () => {
    describe('without query', () => {
      beforeEach(async () => {
        ctx = createMockContext({ method: 'GET', url: '/users' })

        await usersRoutes(ctx)
      })

      it('should send the right response', () => {
        expect(ctx.body).toMatchSnapshot()
      })
    })

    describe('with query', () => {
      beforeEach(async () => {
        ctx = createMockContext({ method: 'GET', url: '/users?q=Stark' })

        await usersRoutes(ctx)
      })

      it('should send the right response', () => {
        expect(ctx.body).toMatchSnapshot()
      })
    })
  })

  describe('POST /users', () => {
    beforeAll(async () => {
      ctx = createMockContext({
        method: 'POST',
        url: '/users',
        requestBody: { name: 'new user', username: 'admin' },
      })

      await usersRoutes(ctx)
    })

    it('should send the right response', () => {
      expect(ctx.body).toMatchSnapshot()
    })

    describe('after creating', () => {
      beforeEach(async () => {
        ctx = createMockContext({ method: 'GET', url: '/users' })

        await usersRoutes(ctx)
      })

      it('should send the right response', () => {
        expect(ctx.body).toMatchSnapshot()
      })
    })
  })

  describe('PUT /users', () => {
    beforeAll(async () => {
      ctx = createMockContext({
        method: 'PUT',
        url: '/users',
        requestBody: {
          id: 1,
          name: 'Daenerys',
          username: 'thequeenbee',
          avatar: 'some dragon or something',
        },
      })

      await usersRoutes(ctx)
    })

    it('should send the right response', () => {
      expect(ctx.body).toMatchSnapshot()
    })

    describe('after updating', () => {
      beforeEach(async () => {
        ctx = createMockContext({ method: 'GET', url: '/users' })

        await usersRoutes(ctx)
      })

      it('should send the right response', () => {
        expect(ctx.body).toMatchSnapshot()
      })
    })
  })
})
