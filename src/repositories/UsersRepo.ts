import IUser from '../models/IUser'
import IUserModel from '../models/IUserModel'
import User from '../models/User'

const users: IUserModel[] = [
  {
    id: 1,
    name: 'Daenerys Targaryen',
    username: 'thequeenbee',
  },
  {
    id: 2,
    name: 'Jon Snow',
    username: 'forthebrotherhood',
  },
  {
    id: 3,
    name: 'Sansa Stark',
    username: 'joffery.fan',
  },
  {
    id: 4,
    name: 'Ned Stark',
    username: 'honouraboveall',
  },
  {
    id: 5,
    name: 'Cersei Lannister',
    username: 'bestmuminwesteros',
  },
]

const findUserById = (id: number) => users.find(user => user.id === id)

export const getLastIdUsers = () =>
  users.reduce((prev, current) => (prev.id > current.id ? prev : current)).id
export const getAllUsers = (): IUser[] => users.map(user => new User(user))
export const getUsersByQuery = (query: string): IUser[] =>
  users
    .filter(user => {
      const lowerQuery = query.toLowerCase()
      return (
        user.name.toLowerCase().includes(lowerQuery) ||
        user.username.toLowerCase().includes(lowerQuery)
      )
    })
    .map(user => new User(user))
export const addUser = (user: IUser) =>
  users.push({
    id: user.getId(),
    name: user.getName(),
    username: user.getUsername(),
    avatar: user.getAvatar(),
  })
export const getUserById = (id: number): IUser | null => {
  const found = findUserById(id)

  if (found) {
    return new User(found)
  }

  return null
}
export const updateUser = (user: IUser) => {
  const found = findUserById(user.getId())

  if (found) {
    found.name = user.getName()
    found.avatar = user.getAvatar()
  }
}
