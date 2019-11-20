import Router from 'koa-router'
import BadRequestError from '../errors/BadRequestError'
import IUser from '../models/IUser'
import IUserModel from '../models/IUserModel'
import UsersService from '../services/UsersService'

const usersService = new UsersService()
const router = new Router()

router.get('/users', async ctx => {
  const users: Array<IUser> = usersService.getAll()

  ctx.body = {
    users: users.map(user => user.toObject()),
  }
})

router.post('/users', async ctx => {
  const { name, username } = ctx.request.body as IUserModel
  if (!name) {
    throw new BadRequestError('Name not defined.')
  }

  const user: IUser = usersService.create(name, username)

  ctx.body = {
    user: user.toObject(),
  }
})

router.put('/users', async ctx => {
  const user = ctx.request.body as IUserModel

  // TODO: some access management
  const updated = usersService.update(user)

  ctx.body = {
    user: updated.toObject(),
  }
})

export default router.routes()
