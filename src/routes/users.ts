import UsersService from '../services/UsersService'
import BadRequestError from '../errors/BadRequestError'
import IUser from '../models/IUser'
import Router from 'koa-router';

const usersService = new UsersService()
const router = new Router()

router.get('/users', async ctx => {
  const users: Array<IUser> = usersService.getAll()

  ctx.body = {
    users: users.map(user => user.toObject())
  }
})

router.post('/users', async ctx => {
  const { name, username } = ctx.request.body
  if (!name) {
    throw new BadRequestError('Name not defined.')
  }

  const user: IUser = usersService.create(name, username)

  ctx.body = {
    user: user.toObject()
  }
})

export default router.routes()
