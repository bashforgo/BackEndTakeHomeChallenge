import UsersService from '../services/UsersService'
import BadRequestError from '../errors/BadRequestError'
import IUser from '../models/IUser'
const usersService = new UsersService()

module.exports = app => {
  app.get('/users', async ctx => {
    const users: Array<IUser> = usersService.getAll()

    ctx.body = {
      users: users.map(user => user.toObject())
    }
  })

  app.post('/users', async ctx => {
    const { name } = ctx.request.body
    if (!name) {
      throw new BadRequestError('Name not defined.')
    }

    const user: IUser = usersService.create(name)

    ctx.body = {
      user: user.toObject()
    }
  })
}