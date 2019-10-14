import { getAllUsers, getLastIdUsers, addUser } from '../repositories/UsersRepo'
import User from '../models/User'
import IUser from '../models/IUser'
import BadRequestError from '../errors/BadRequestError'

export default class UsersService {
  /**
   * Returns all users
   */
  public getAll(): Array<IUser> {
    return getAllUsers()
  }

  /**
   * Creates new user
   */
  public create(name: string): IUser {
    if (name.length > 50) {
      throw new BadRequestError('It looks like your name is too long. Maybe you should change it? :)')
    }

    const lastId = getLastIdUsers()
    const user = new User({
      name, id: lastId + 1,
    })

    addUser(user)
    return user
  }
}