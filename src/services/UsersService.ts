import BadRequestError from '../errors/BadRequestError'
import IUser from '../models/IUser'
import IUserModel from '../models/IUserModel'
import User from '../models/User'
import {
  addUser,
  getAllUsers,
  getLastIdUsers,
  getUserById,
  getUsersByQuery,
  updateUser,
} from '../repositories/UsersRepo'

export default class UsersService {
  /**
   * Returns all users
   */
  public getAll(): Array<IUser> {
    return getAllUsers()
  }

  public search(query: string): Array<IUser> {
    return getUsersByQuery(query)
  }

  /**
   * Creates new user
   */
  public create(name: string, username: string): IUser {
    if (name.length > 50) {
      throw new BadRequestError(
        'It looks like your name is too long. Maybe you should change it? :)',
      )
    }

    const lastId = getLastIdUsers()
    const user = new User({
      name,
      username,
      id: lastId + 1,
    })

    addUser(user)
    return user
  }

  public update(source: IUserModel): IUser {
    const user = getUserById(source.id)

    if (user) {
      user.updateName(source.name)
      user.updateAvatar(source.avatar)
      updateUser(user)
    } else {
      throw new BadRequestError()
    }

    return user
  }
}
